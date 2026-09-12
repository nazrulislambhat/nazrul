'use client';

import React, { useEffect, useState } from 'react';
import { GitCommit, GitPullRequest, ArrowUpRight } from 'lucide-react';

interface ActivityState {
  repo: string;
  type: 'push' | 'pr';
  timeAgo: string;
  url: string;
}

export default function GithubPulse() {
  const [activity, setActivity] = useState<ActivityState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchLatestActivity() {
      try {
        const res = await fetch(
          'https://api.github.com/users/nazrulislambhat/events/public',
          { next: { revalidate: 300 } },
        );

        if (!res.ok) throw new Error('GitHub API rate limited or unreachable');

        const events = await res.json();
        if (!Array.isArray(events) || events.length === 0) return;

        const relevantEvent = events.find(
          (e: { type: string }) =>
            e.type === 'PushEvent' || e.type === 'PullRequestEvent',
        );

        if (relevantEvent && isMounted) {
          const repoFullName = relevantEvent.repo.name;
          const repoShort = repoFullName.replace(/^[^/]+\//, '');
          const eventDate = new Date(relevantEvent.created_at);
          const diffMs = Date.now() - eventDate.getTime();
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffDays = Math.floor(diffHours / 24);

          let relativeStr = `${diffHours}h ago`;
          if (diffHours < 1) {
            const diffMins = Math.max(1, Math.floor(diffMs / (1000 * 60)));
            relativeStr = `${diffMins}m ago`;
          } else if (diffHours >= 24) {
            relativeStr = `${diffDays}d ago`;
          }

          setActivity({
            repo: repoShort,
            type: relevantEvent.type === 'PushEvent' ? 'push' : 'pr',
            timeAgo: relativeStr,
            url: `https://github.com/${repoFullName}`,
          });
        }
      } catch {
        if (isMounted) setActivity(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchLatestActivity();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10.5px] text-textMuted/60">
        <GitCommit className="w-3 h-3 animate-pulse text-signal" />
        <span>Fetching telemetry...</span>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10.5px] text-textMuted">
        <GitCommit className="w-3 h-3 text-signal" />
        <span>Active on</span>
        <a
          href="https://github.com/nazrulislambhat"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-0.5 text-textMain hover:text-signal hover:underline transition-colors"
        >
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    );
  }

  return (
    <div className="hidden sm:flex items-center gap-2 font-mono text-[10.5px] text-textMuted select-none">
      <div className="flex items-center gap-1">
        {activity.type === 'push' ? (
          <GitCommit className="w-3 h-3 text-signal shrink-0" />
        ) : (
          <GitPullRequest className="w-3 h-3 text-volt shrink-0" />
        )}
        <span className="text-[10px] text-textMuted/70">
          {activity.type === 'push' ? 'PUSHED TO' : 'PR ON'}
        </span>
      </div>

      <span className="text-black">|</span>

      {/* Linked Repo Name with Animated Arrow */}
      <a
        href={activity.url}
        target="_blank"
        rel="noreferrer"
        title={`View repository: ${activity.repo}`}
        className="group inline-flex items-center gap-1 font-semibold text-textMain hover:text-signal hover:underline transition-colors cursor-pointer"
      >
        <span>{activity.repo}</span>
        <ArrowUpRight className="w-3 h-3 text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      <span className="text-[9.5px] text-textMuted/70">
        ({activity.timeAgo})
      </span>
    </div>
  );
}
