import type { Metadata } from 'next';
import { HospitalityPageContent } from '../../components/StudioPages';
import { SITE_URL } from '../../i18n/site';

export const metadata: Metadata = {
  title: 'Hospitality Websites & Software Expertise | Plex',
  description: 'Hospitality expertise from Plex: conversion websites, reservations, customer self-service, operations dashboards and mobile staff workflows.',
  alternates: { canonical: `${SITE_URL}/expertise/hospitality` },
};

export default function HospitalityPage() {
  return <HospitalityPageContent />;
}
