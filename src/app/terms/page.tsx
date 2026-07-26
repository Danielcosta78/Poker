import type { Metadata } from 'next'
import { LegalPage, Section, A } from '@/components/marketing/LegalPage'

export const metadata: Metadata = {
  title: 'Terms · Stack Poker',
  description: 'The short, human rules for using Stack Poker — free, play money, open source.',
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms" updated="July 2026">
      <Section title="The short version">
        <p>
          The plain-English rules for using Stack Poker at{' '}
          <A href="https://playpip.io">playpip.io</A>. No surprises: Stack Poker is free, play
          money, and open source.
        </p>
      </Section>

      <Section title="It's play money — not gambling">
        <p>
          Stack Poker is a single-player poker game played with pretend chips. There is no real
          money anywhere in it: nothing to deposit, nothing to win, no prizes, nothing to cash out.
          Your &ldquo;Roll&rdquo; is a number in your browser, not a balance. Stack Poker is not a
          gambling service and is not a way to gamble.
        </p>
      </Section>

      <Section title="As is">
        <p>
          Stack Poker is free and provided as-is. We build it with care, but we can&rsquo;t promise
          it will always work perfectly, never lose your local data, or suit any particular purpose.
          To the extent the law allows, we&rsquo;re not liable for anything that comes of using it.
          If your progress matters to you, back your profile up from Settings — it lives only on
          your device, so it&rsquo;s yours to keep and yours to lose.
        </p>
      </Section>

      <Section title="Play nice">
        <p>
          Use Stack Poker for what it&rsquo;s for. Don&rsquo;t attack or disrupt the service, or try
          to break it for other people. That&rsquo;s about the whole of it.
        </p>
      </Section>

      <Section title="The code">
        <p>
          Stack Poker&rsquo;s source is public at{' '}
          <A href="https://github.com/Danielcosta78/pip-poker">
            github.com/Danielcosta78/pip-poker
          </A>{' '}
          — read it, learn from it, check our claims. These terms cover the game as hosted at
          playpip.io; the code itself is released under the MIT licence in the repository.
        </p>
      </Section>

      <Section title="Age">
        <p>Stack Poker is intended for people 13 and over.</p>
      </Section>

      <Section title="Changes">
        <p>
          We may update these terms as Stack Poker grows — most likely when we add cosmetics you can
          buy. We&rsquo;ll change the date at the top when we do. Keep using Stack Poker and
          you&rsquo;re fine with the current version.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions, or something not right? Open an issue at{' '}
          <A href="https://github.com/Danielcosta78/pip-poker">
            github.com/Danielcosta78/pip-poker
          </A>
          .
        </p>
      </Section>
    </LegalPage>
  )
}
