export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  keyIdeas: string[];
  sections: InsightSection[];
  takeaway: string;
};

export const insights: Insight[] = [
  {
    slug: 'controlled-ai-automation',
    category: 'AI & automation',
    title: 'Where AI belongs in business operations',
    description:
      'A practical framework for deciding what AI may suggest, what software should determine, and what people must approve.',
    keyIdeas: ['Suggestion before execution', 'Visible decision boundaries', 'Recovery by design'],
    sections: [
      {
        heading: 'Start with the decision, not the model',
        paragraphs: [
          'The useful question is rarely “Where can we add AI?” It is “Which decision or handoff is creating delay, inconsistency, or avoidable manual work?” Once that is clear, the team can decide whether the answer is a rule, an integration, a better interface, or an AI-assisted step.',
          'This distinction matters because predictable work usually benefits from deterministic software. A reservation should not depend on a model guessing whether capacity is available. A payment should not be sent because generated text sounded confident. AI is most useful where the input is unstructured and the output can be reviewed: summarising an enquiry, extracting fields from a document, suggesting a category, or drafting a response.',
        ],
      },
      {
        heading: 'Separate suggestion, decision, and action',
        paragraphs: [
          'A controlled workflow gives each part of the system a clear responsibility. AI can interpret ambiguous material and make a suggestion. Business rules can validate required fields, permissions, capacity, and thresholds. A person can approve consequential or uncertain cases. Only then should an integration update another system or contact a customer.',
          'The interface should make this boundary visible. Users need to see what came from the original source, what was generated, why a rule applied, and what will happen after approval. Hiding those distinctions behind a single “automate” button weakens trust and makes failures harder to diagnose.',
        ],
        bullets: [
          'AI suggests a category, priority, summary, or draft.',
          'Deterministic rules check known constraints and route the work.',
          'A named role approves high-impact or low-confidence decisions.',
          'The system records the action and synchronises approved changes.',
        ],
      },
      {
        heading: 'Design for evaluation and recovery',
        paragraphs: [
          'A useful prototype should be evaluated against real examples before it is connected to live operations. That means agreeing what a good result looks like, collecting representative inputs, and reviewing false positives as carefully as successful examples. A model demo that works on three polished prompts is not evidence of a dependable workflow.',
          'Recovery is equally important. People need a way to edit suggestions, reverse an action where possible, retry a failed integration, and understand which records were affected. Logs should be readable enough to answer who approved what and when. These controls are product features, not technical afterthoughts.',
        ],
      },
      {
        heading: 'Automate in stages',
        paragraphs: [
          'The safest first release is often assistive: the system prepares work but a person still completes it. Once the team understands error patterns, repetitive low-risk decisions can move to rule-based execution. Higher-impact actions can remain reviewed even when the surrounding workflow becomes faster.',
          'This staged approach is not hesitation. It reduces operational risk, gives the team evidence for the next investment, and preserves the judgment that makes the business work. Good automation removes unnecessary handling without making responsibility disappear.',
        ],
      },
    ],
    takeaway:
      'Use AI for interpretation and assistance, rules for known constraints, and people for accountable decisions. Connect actions only after those boundaries are explicit.',
  },
  {
    slug: 'internal-tool-or-spreadsheet',
    category: 'Internal tools',
    title: 'When a business needs an internal tool instead of another spreadsheet',
    description:
      'The practical signals that a shared file has become an operating system—and what to define before replacing it.',
    keyIdeas: ['Workflow over rows', 'Roles and ownership', 'Build only when justified'],
    sections: [
      {
        heading: 'A spreadsheet is often the right first tool',
        paragraphs: [
          'Spreadsheets are flexible, familiar, and quick to change. They are excellent for discovering a process while the team is still learning which information matters. Replacing one simply because custom software appears more sophisticated can turn an adaptable workflow into an expensive set of assumptions.',
          'The decision changes when the spreadsheet stops being a document and starts acting like a system. If several people depend on it to coordinate customer work, approvals, inventory, schedules, or money, the hidden cost is no longer the file itself. It is the manual checking, duplicated entry, unclear ownership, and recovery work surrounding it.',
        ],
      },
      {
        heading: 'Look for operational pressure, not file size',
        paragraphs: [
          'A large spreadsheet can still be manageable, while a small one can create serious risk. The strongest signals are behavioural. Staff copy the same information between tools. Status meanings differ between teams. One person knows how the formulas work. Permissions are all-or-nothing. Customers wait while someone verifies the latest version. Managers assemble reports by hand because the source data is inconsistent.',
          'These are signs that the business needs a defined workflow and source of truth. A purpose-built tool can make states explicit, assign responsibility, validate inputs, and connect the systems that already hold customer or transaction data.',
        ],
        bullets: [
          'The same information is re-entered in two or more systems.',
          'Approvals and exceptions happen in chat or email without a reliable record.',
          'People cannot tell which status, owner, or version is current.',
          'Access must differ by role, team, location, or client.',
          'Manual reporting delays decisions or creates frequent reconciliation work.',
        ],
      },
      {
        heading: 'Define the operating model before the interface',
        paragraphs: [
          'An internal tool should be shaped around decisions and handoffs, not around reproducing every column on screen. Start by mapping how work enters the business, which states it passes through, who owns each transition, what can block it, and which systems must be updated.',
          'The first release should cover one complete, valuable path. For example: receive a request, validate it, assign an owner, approve an exception, and record the outcome. Trying to absorb every edge case and report immediately often creates a long build before anyone experiences the core improvement.',
        ],
      },
      {
        heading: 'Know when not to build',
        paragraphs: [
          'Custom software is difficult to justify when the process is temporary, changes every week, has very few users, or can be handled well by configuring an existing product. It also requires an owner after launch: someone must decide priorities, maintain data quality, and support changes in the business.',
          'A short discovery phase should compare three options: improve the current process, configure an established tool, or build a custom one. The right outcome may be a cleaner spreadsheet with better rules. The purpose of discovery is to reduce uncertainty, not to manufacture a software project.',
        ],
      },
    ],
    takeaway:
      'Build an internal tool when a stable, important workflow needs clear states, ownership, permissions, or integrations—not merely because a spreadsheet looks untidy.',
  },
  {
    slug: 'booking-system-operations',
    category: 'Booking systems',
    title: 'A booking system is an operations product, not just a form',
    description:
      'Why availability, policies, staff workflows, and exceptions matter as much as the customer-facing reservation journey.',
    keyIdeas: ['One operational model', 'Exceptions are core journeys', 'Customer and staff UX together'],
    sections: [
      {
        heading: 'The form is only the visible edge',
        paragraphs: [
          'A customer experiences a booking as a short sequence: choose a service or space, select a time, provide details, and receive confirmation. The business experiences everything behind that sequence: capacity, staffing, preparation time, deposits, cancellations, changes, no-shows, special requests, and reporting.',
          'If the website captures a request without understanding those operational constraints, staff still need to reconcile it manually. The interface may look polished while the underlying process remains slow and error-prone. A real booking product connects the promise made to the customer with what the business can reliably deliver.',
        ],
      },
      {
        heading: 'Create one model of availability',
        paragraphs: [
          'Availability is not always a list of empty time slots. It may depend on resource capacity, service duration, turnaround time, opening hours, party size, staff skills, location, inventory, or rules for particular dates. These constraints need one clear source of truth.',
          'The customer interface should reveal only the choices that can be honoured. The staff interface needs enough context to understand why a slot is available, blocked, or awaiting approval. When separate calendars or manual buffers disagree, the cost appears as double bookings, idle capacity, and time spent checking.',
        ],
        bullets: [
          'Capacity and resources required for the booking.',
          'Lead time, duration, preparation, and turnaround rules.',
          'Pricing, deposits, cancellation terms, and refund handling.',
          'Notifications for customers and responsible staff.',
          'Connections to calendars, payments, CRM, or on-site systems.',
        ],
      },
      {
        heading: 'Treat exceptions as product journeys',
        paragraphs: [
          'Changes and failures are normal operations. A customer chooses the wrong date. A payment is authorised but confirmation fails. A venue closes unexpectedly. A request exceeds the standard capacity but could still be valuable. These should not be left as vague manual work because they did not fit the ideal booking path.',
          'The product should show what happened, who needs to act, and which options are safe. Some exceptions can be resolved through self-service. Others need a staff queue with clear context and authority. Designing these paths early produces more trust than adding another animation to the confirmation screen.',
        ],
      },
      {
        heading: 'Measure the full service journey',
        paragraphs: [
          'Conversion matters, but it is not the only measure. The business should also understand abandoned steps, manual interventions, response time for requests, changes and cancellations, capacity utilisation, payment failures, and recurring sources of support work.',
          'These patterns apply beyond hospitality. Appointment-based services, equipment rental, education, healthcare administration, and professional services all coordinate limited time or resources. The details differ, but the product principle remains the same: customer choice and operational truth must share one system.',
        ],
      },
    ],
    takeaway:
      'Design booking around the complete operating model—availability, policies, staff decisions, exceptions, and connected systems—then make the customer journey feel simple.',
  },
];

export const findInsight = (slug: string) =>
  insights.find((insight) => insight.slug === slug);
