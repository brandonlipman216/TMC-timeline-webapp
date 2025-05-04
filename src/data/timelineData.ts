import { TimelineEvent } from '../types';
import { parseISO } from 'date-fns';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: parseISO('2025-03-27'),
    type: 'Company',
    title: 'Company Press Release: "The Metals Company to Apply for Permits under Existing U.S. Mining Code for Deep-Sea Minerals in the High Seas in Second Quarter of 2025"',
    description: 'Public commitment to the U.S. regulatory path; initiates pre-application consultations with NOAA and signals the shift from an ISA-only strategy. Sets the Q2 filing roadmap underpinning the entire U.S. permitting timeline.'
  },
  {
    id: '2',
    date: parseISO('2025-04-09'),
    type: 'Policy',
    title: 'EO 2025-04-09, "Restoring America\'s Maritime Dominance" signed',
    description: 'Establishes a whole-of-government strategy to rebuild U.S. shipyards, ports, and the maritime workforce (Secs 2–3); modernize critical facilities (Sec 14); leverage DPA Title III for domestic shipbuilding (Sec 4). Provides the policy backbone for TMC\'s vessel commissioning, crewing, and port operations.'
  },
  {
    id: '3',
    date: parseISO('2025-04-15'),
    type: 'Policy',
    title: 'Presidential Memorandum "Updating Permitting Technology for the 21st Century" signed',
    description: 'Directs CEQ to establish a Permitting Innovation Center and, within 30 days, issue a Permitting Technology Action Plan (PTAP) defining NEPA data-exchange protocols, software standards, and automation strategies. Aims to compress what is normally a multi-year Draft/Final EIS process into months—critical to accelerating TMC\'s environmental reviews.'
  },
  {
    id: '4',
    date: parseISO('2025-04-15'),
    type: 'Policy',
    title: 'EO 2025-04-15, "Ensuring National Security and Economic Resilience Through Section 232 Actions on Processed Critical Minerals and Derivative Products" signed',
    description: 'Launches a Section 232 trade investigation into imports of processed critical minerals (nickel sulfate, cobalt, copper derivatives) to assess supply-chain vulnerabilities and national-security risks. Its scope (Sec 3) dictates whether to impose tariffs, quotas, or incentives—directly shaping the economics of TMC\'s downstream nodule-refining and offtake agreements.'
  },
  {
    id: '5',
    date: parseISO('2025-04-24'),
    type: 'Policy',
    title: 'EO 2025-04-24, "Unleashing America\'s Offshore Critical Minerals and Resources" signed',
    description: 'Declares seabed minerals a U.S. strategic priority; directs NOAA/BOEM to expedite DSHMRA & OCSLA permitting (Sec 3); mandates 60-day interagency reports on exploration, processing, mapping, allied engagement, and Defense Stockpile feasibility—synchronizing every stakeholder TMC needs for a fast-tracked permit path.'
  },
  {
    id: '6',
    date: parseISO('2025-04-29'),
    type: 'Policy',
    title: 'Deep Seabed Hard Mineral Resources Act (DSHMRA) Filing: Submission of exploration-license & commercial-recovery-permit applications to NOAA',
    description: 'Under the Deep Seabed Hard Mineral Resources Act (DSHMRA) (30 U.S.C. § 1401 et seq.) and NOAA regs (15 C.F.R. §§ 970–971), these filings trigger mandatory 30-day (exploration) and 60-day (commercial) "completeness" reviews before any NEPA scoping or EIS work. TMC cannot proceed with offshore operations or vessel financing until these statutory gateways clear.'
  },
  {
    id: '7',
    date: parseISO('2025-04-30'),
    type: 'Policy',
    title: 'CEQ Memorandum "Establishment of Permitting Innovation Center" issued',
    description: 'Implements the Apr 15 Memorandum by standing up the Permitting Innovation Center within 15 days to design/test prototype digital tools and coordinate agencies—key to automating permit workflows and accelerating TMC\'s environmental reviews.'
  },
  {
    id: '8',
    date: parseISO('2025-05-09'),
    type: 'Policy',
    title: 'EO 2025-04-09 Sec 14(a)(i): U.S. Merchant Marine Academy facilities-staff hiring due',
    description: 'Requires DOT to recruit and train maintenance and technical staff at the U.S. Merchant Marine Academy—ensuring a pipeline of mariners, inspectors, and shipyard technicians that TMC\'s deep-sea vessels will rely on for safe offshore operations and ongoing upkeep.'
  },
  {
    id: '9',
    date: parseISO('2025-05-12'),
    type: 'Company',
    title: 'TMC Q1 2025 Earnings Release & Call',
    description: 'Provides management\'s update on PFS timing, NOAA-filing progress, and early environmental/regulatory insights. Q1 results take ~6 weeks post-quarter to audit, prepare slides, and host analysts—making this a key near-term investor catalyst.'
  },
  {
    id: '10',
    date: parseISO('2025-05-29'),
    type: 'Company',
    title: '2025 Annual Meeting of Shareholders at 10:00 AM EDT',
    description: 'Formal governance vote and live Q&A, typically accompanied by strategic updates on permitting, financing, PFS status, and regulatory milestones. Must occur within ~6 months of fiscal year-end under corporate bylaws.'
  },
  {
    id: '11',
    date: parseISO('2025-05-29'),
    type: 'Policy',
    title: 'DSHMRA: 30-day completeness review for exploration-license applications due',
    description: 'Under DSHMRA § 107 and NOAA regs (15 C.F.R. § 970.118), NOAA has 30 days to determine whether TMC\'s exploration-license apps meet substantial compliance. Any deficiency letter pauses the clock—forcing TMC to address technical or environmental-monitoring gaps before NEPA scoping.'
  },
  {
    id: '12',
    date: parseISO('2025-05-30'),
    type: 'Policy',
    title: 'Permitting Technology Action Plan due',
    description: 'CEQ must publish the PTAP detailing NEPA data-exchange standards, software interoperability guidelines, and prototype automation requirements. These protocols will help TMC slash iterative review cycles and accelerate Draft and Final EIS phases by replacing manual, paper-based workflows.'
  },
  {
    id: '13',
    date: parseISO('2025-06-23'),
    type: 'Policy',
    title: 'EO 2025-04-24 Sec 3 (60 days): "Unleashing America\'s Offshore Critical Minerals & Resources" deliverables due',
    description: 'Agencies must (i) expedite DSHMRA permits, (ii) report on exploration & processing opportunities, (iii) finalize seabed-mapping plans, (iv) align allied-engagement strategies, and (v) deliver Defense Stockpile feasibility—all prerequisites for TMC\'s permit approvals, technical planning, and global partnership building.'
  },
  {
    id: '14',
    date: parseISO('2025-06-27'),
    type: 'Company',
    title: 'ISA Submission: NORI (TMC USA) submits exploitation-contract application to the International Seabed Authority (ISA)',
    description: 'Marks the first-ever ISA commercial-exploitation application by a U.S. sponsor. Aligns with ISA\'s two-year notice rule and the 30th session schedule, creating a parallel global review that could inform or reinforce NOAA\'s permitting decisions for TMC.'
  },
  {
    id: '15',
    date: parseISO('2025-06-28'),
    type: 'Policy',
    title: 'DSHMRA: 60-day completeness review for commercial-recovery-permit application due',
    description: 'Under DSHMRA § 1413(b), NOAA must declare TMC\'s commercial-permit application complete within 60 days, triggering formal NEPA scoping and public comment. Balances environmental safeguards with strategic mineral needs before Draft EIS work begins.'
  },
  {
    id: '16',
    date: parseISO('2025-05-15'), // Middle of Q2 for sorting purposes
    type: 'Company',
    title: 'Pre-Feasibility Study (PFS) Release (Q2 2025)',
    description: 'Completes site-characterization, metallurgical testing, economic modelling, and expert reviews—typically a multi-month process involving lab pilots, expert validation, and capital-cost estimates. The PFS underpins both U.S. and ISA permit filings and serves as a key technical catalyst.'
  },
  {
    id: '17',
    date: parseISO('2025-07-07'),
    type: 'Policy',
    title: 'ISA 30th Session (Council: Jul 7–18; Assembly: Jul 21–25)',
    description: 'The ISA Council and Assembly will review NORI\'s exploitation application and potential mining-code regulations. Outcomes could set environmental standards and fast-track processes that influence both ISA and NOAA pathways for TMC\'s project.'
  },
  {
    id: '18',
    date: parseISO('2025-07-08'),
    type: 'Policy',
    title: 'EO 2025-04-09 Sec 7/8/11/12/13/15 (90 days): "Restoring America\'s Maritime Dominance" interagency deliverables due',
    description: 'Requires USTR/Commerce ally-engagement & incentive plans (Secs 7/8); designation of Maritime Prosperity Zones (Sec 11); inventory of federal maritime programs (Sec 12); workforce-pipeline recommendations (Sec 13); procurement-efficiency proposals (Sec 15). These deliverables define grants, port-upgrade funding, training pipelines, and regulatory shortcuts that TMC will leverage to commission, crew, and maintain its deep-sea fleet cost-effectively.'
  },
  {
    id: '19',
    date: parseISO('2025-07-14'),
    type: 'Policy',
    title: 'EO 2025-04-15 Sec 3(c)(i) (90 days): Draft interim Section 232 report due',
    description: 'Commerce must analyze import volumes, geopolitical risks, processing-capacity gaps, and supply-chain vulnerabilities. These findings feed directly into TMC\'s PFS assumptions, tariff-incentive modelling, and domestic-processing strategy.'
  },
  {
    id: '20',
    date: parseISO('2025-07-15'),
    type: 'Policy',
    title: 'Federal Register Notice of Intent (NOI) Published',
    description: 'Publication of the NOI in the Federal Register (40 C.F.R. § 1501.7) triggers a 30–60 day public scoping period under NEPA. NOAA gathers stakeholder input (fisheries, tribes, conservation groups) to define the range of alternatives and data needs. TMC\'s application must then address every scoped issue in its Draft EIS, so NOAA needs time to draft and publish the NOI itself.'
  },
  {
    id: '21',
    date: parseISO('2025-07-29'),
    type: 'Policy',
    title: 'EO 2025-04-15 Sec 3(c)(ii) (15 days): Comments on draft interim Section 232 report due',
    description: 'Interagency stakeholders (Treasury, DoD, USTR, etc.) refine and finalize policy recommendations on tariffs, quotas, and domestic incentives—ensuring balanced defense, economic, and trade considerations that TMC must incorporate into its offtake and financing models.'
  },
  {
    id: '22',
    date: parseISO('2025-10-06'),
    type: 'Policy',
    title: 'EO 2025-04-09 Sec 4 (180 days): Defense-Industrial-Base Assessment due',
    description: 'Directs DoD, Commerce, DOT & DHS to evaluate DPA Title III authorities and private-sector financing options for U.S. shipbuilding capacity, component supply chains, and port infrastructure. This 180-day study underpins loan and grant programs that TMC will leverage to retrofit existing vessels or commission new deep-sea collection ships.'
  },
  {
    id: '23',
    date: parseISO('2025-10-12'),
    type: 'Policy',
    title: 'EO 2025-04-15 Sec 3(c)(iii) (180 days): Final Section 232 report & recommendations due',
    description: 'Commerce must deliver to the President a final set of policy options—tariffs, quotas, incentives, or safeguards—to mitigate national-security risks from imported processed minerals. These policy decisions will directly shape TMC\'s refining economics and partner negotiations for nodule-refining.'
  },
  {
    id: '24',
    date: parseISO('2025-11-05'),
    type: 'Policy',
    title: 'EO 2025-04-09 Sec 3(a) (210 days): Maritime Action Plan (MAP) submission due',
    description: 'Consolidates all directives from "Restoring America\'s Maritime Dominance" into a unified roadmap—covering Buy-American rules, federal funding priorities, regulatory reforms, and global trade alignment. The MAP will specify when and how federal support flows to shipyards, ports, and workforce programs critical to TMC\'s mobilization and sustained operations.'
  },
  {
    id: '25',
    date: parseISO('2025-12-31'),
    type: 'Policy',
    title: 'Defense Department Feasibility Study on Domestic PMN Refining due',
    description: 'Mandated by FY 2025 NDAA (P.L. 118-159), the Secretary of Defense (via the Industrial Base Policy Office) must report to the House and Senate Armed Services Committees on the feasibility of refining polymetallic nodule–derived intermediates into high-purity nickel, cobalt sulfate, and copper for defense applications—specifically regarding domestic nodule refining. The 12-month statutory window allows comprehensive stakeholder engagement, technical-economic analysis, and defense-supply-chain vetting.'
  },
  
  // Variable timeline events
  {
    id: '26',
    date: parseISO('2025-10-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement (Draft EIS) Issued',
    description: 'After what is typically a ~12-month period from the NOI publication of baseline studies, interagency consultation (NOAA → EPA → CEQ), and incorporation of scoping comments, NOAA publishes the Draft EIS for a 45-day comment period (40 C.F.R. § 1503.1). Leveraging PTAP digital workflows, programmatic tiering, and parallel studies compresses the Draft EIS from ~6 months to 1.5 months (25% of 6 mo).',
    isVariableTimeline: true,
    compressionLevel: '75%'
  },
  {
    id: '27',
    date: parseISO('2026-01-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement (Draft EIS) Issued',
    description: 'After what is typically a ~12-month period from the NOI publication of baseline studies, interagency consultation (NOAA → EPA → CEQ), and incorporation of scoping comments, NOAA publishes the Draft EIS for a 45-day comment period (40 C.F.R. § 1503.1). Leveraging PTAP digital workflows, programmatic tiering, and parallel studies compresses the Draft EIS from ~6 months to 3 months (50% of 6 mo).',
    isVariableTimeline: true,
    compressionLevel: '50%'
  },
  {
    id: '28',
    date: parseISO('2026-07-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement (Draft EIS) Issued',
    description: 'After what is typically a ~12-month period from the NOI publication of baseline studies, interagency consultation (NOAA → EPA → CEQ), and incorporation of scoping comments, NOAA publishes the Draft EIS for a 45-day comment period (40 C.F.R. § 1503.1).',
    isVariableTimeline: true,
    compressionLevel: 'Typical'
  },
  {
    id: '29',
    date: parseISO('2025-11-07'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'NOAA addresses all substantive Draft EIS comments, finalizes analyses and mitigation measures, then files the Final EIS. At least 30 days after EPA\'s Notice of Availability, NOAA issues the ROD (per its NAO 216-6 procedures), legally certifying whether to grant, deny, or condition TMC\'s permit. This multi-month cycle ensures rigorous environmental and legal vetting before any permit can be issued.',
    isVariableTimeline: true,
    compressionLevel: '75%'
  },
  {
    id: '30',
    date: parseISO('2026-03-01'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'NOAA addresses all substantive Draft EIS comments, finalizes analyses and mitigation measures, then files the Final EIS. At least 30 days after EPA\'s Notice of Availability, NOAA issues the ROD (per its NAO 216-6 procedures), legally certifying whether to grant, deny, or condition TMC\'s permit. This multi-month cycle ensures rigorous environmental and legal vetting before any permit can be issued.',
    isVariableTimeline: true,
    compressionLevel: '50%'
  },
  {
    id: '31',
    date: parseISO('2026-10-15'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'NOAA addresses all substantive Draft EIS comments, finalizes analyses and mitigation measures, then files the Final EIS. At least 30 days after EPA\'s Notice of Availability, NOAA issues the ROD (per its NAO 216-6 procedures), legally certifying whether to grant, deny, or condition TMC\'s permit. This multi-month cycle ensures rigorous environmental and legal vetting before any permit can be issued.',
    isVariableTimeline: true,
    compressionLevel: 'Typical'
  },
  {
    id: '32',
    date: parseISO('2025-11-29'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Within 90 days of the ROD, NOAA must finalize and issue TMC\'s commercial-recovery permit—subject to any antitrust review by DOJ/FTC (which also has 90 days per 30 U.S.C. § 1413). Once issued, TMC legally holds the right to begin seabed mining activities, secure vessel mobilization, and proceed toward first­-production planning.',
    isVariableTimeline: true,
    compressionLevel: '75%'
  },
  {
    id: '33',
    date: parseISO('2026-04-15'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Within 90 days of the ROD, NOAA must finalize and issue TMC\'s commercial-recovery permit—subject to any antitrust review by DOJ/FTC (which also has 90 days per 30 U.S.C. § 1413). Once issued, TMC legally holds the right to begin seabed mining activities, secure vessel mobilization, and proceed toward first­-production planning.',
    isVariableTimeline: true,
    compressionLevel: '50%'
  },
  {
    id: '34',
    date: parseISO('2027-01-13'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Within 90 days of the ROD, NOAA must finalize and issue TMC\'s commercial-recovery permit—subject to any antitrust review by DOJ/FTC (which also has 90 days per 30 U.S.C. § 1413). Once issued, TMC legally holds the right to begin seabed mining activities, secure vessel mobilization, and proceed toward first­-production planning.',
    isVariableTimeline: true,
    compressionLevel: 'Typical'
  }
];