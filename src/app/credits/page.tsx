import type { Metadata } from 'next'
import { A, LegalPage, Section } from '@/components/marketing/LegalPage'
import contributors from '@/data/contributors.json'

export const metadata: Metadata = {
  title: 'Credits · Stack Poker',
  description: 'The people who build Stack Poker. Open source, so the list writes itself.',
}

type Contributor = { login: string; avatar: string; url: string; contributions: number }

export default function CreditsPage() {
  const people = contributors as Contributor[]

  return (
    <LegalPage title="Credits">

    </LegalPage>
  )
}
