import { TimelineEvent } from '../types';
import { parseISO } from 'date-fns';

// Create the events array first
const unsortedEvents: TimelineEvent[] = [
  {
    id: '1',
    date: parseISO('2025-02-14'),
    type: 'Policy',
    title: 'Executive Order 14213, "Establishing the National Energy Dominance Council" signed',
    description: 'Creates the National Energy Dominance Council within the Executive Office of the President to advise the President on expanding U.S. energy production, cutting red tape, and prioritizing critical minerals—including copper, uranium, gold, and potash—for infrastructure and clean-energy projects. Sec. 4(d) requires the Council, within 100 days (due Jun 24, 2025), to recommend a national plan to raise awareness of energy dominance and actions agencies can take to accelerate permitting and production. The Council is composed of Cabinet secretaries from Interior, Energy, Commerce, and Defense, plus key White House advisors. This establishes the whole-of-government approach that will expedite TMC\'s permitting timeline. The creation of this Council signals administrative priority for critical minerals and establishes the policy foundation for all subsequent executive actions affecting TMC\'s permitting and development timeline.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/02/establishing-the-national-energy-dominance-council/'
  },
  {
    id: '38',
    date: parseISO('2025-02-27'),
    type: 'Policy',
    title: 'Executive Order, "Addressing the Threat to National Security from Imports of Copper" signed',
    description: 'Declares copper imports a national security threat under Section 232 of the Trade Expansion Act, requiring measures to increase domestic production and reduce foreign dependence. Such action could potentially benefit alternative supply sources including seabed resources. The policy implications could create a more favorable regulatory environment for TMC\'s nodule collection permits and establish market conditions that enhance the company\'s commercial prospects through potential tariffs on competing foreign copper supplies.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/02/addressing-the-threat-to-nationalsecurity-from-imports-of-copper/'
  },
  {
    id: '2',
    date: parseISO('2025-03-20'),
    type: 'Policy',
    title: 'Executive Order 2025-03-20, "Immediate Measures to Increase American Mineral Production" signed',
    description: 'Directs federal agencies to fast-track permitting under the Defense Production Act and other authorities, expand domestic critical-minerals funding, and establish a dedicated Critical Minerals Fund to support new projects. Prioritizes onshore and offshore projects for key minerals—particularly copper—and authorizes financial incentives and streamlined reviews to reduce reliance on foreign supply chains. Section 2(c) specifically directs NOAA to prioritize deep seabed mining permit applications, establishing a 60-day target for completeness reviews instead of the typical multi-year timeline. The Critical Minerals Fund initially allocates $2.5 billion for loans, loan guarantees, and grants that TMC could potentially access for processing facilities and port infrastructure. Creates a Critical Minerals Senior Coordinator role within the Department of Commerce that TMC will engage with throughout the permitting process.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/03/immediate-measures-to-increase-american-mineral-production/'
  },
  {
    id: '39',
    date: parseISO('2025-04-02'),
    type: 'Company',
    title: 'Rutger Bosland appointed as Technical Lead for Deep-Sea Collection Systems',
    description: 'TMC announces the appointment of pioneering engineer Rutger Bosland as Technical Lead overseeing the company\'s deep-sea nodule collection technology development. Bosland brings 25 years of offshore engineering experience including successful design and implementation of subsea collection systems in demanding environments. His expertise will be critical to optimizing the nodule collector design, improving operational efficiency, and addressing environmental performance standards required for commercial permits. This strategic hire demonstrates TMC\'s commitment to building a world-class technical team capable of executing the first commercial deep-sea nodule recovery operations.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/rutger-bosland-pioneering-engineer-and-technical-lead'
  },
  {
    id: '3',
    date: parseISO('2025-06-24'),
    type: 'Policy',
    title: 'Executive Order 14213 Sec 4(d): National Energy Dominance Council deliverable due',
    description: 'Council must deliver to the President a 100-day plan recommending national-level awareness strategies and agency actions to accelerate permitting and production of all energy forms—including copper for clean-energy infrastructure. The plan includes a comprehensive inventory of federal lands with known critical mineral deposits, a schedule for lease sales, and agency-specific permitting timelines that will directly impact TMC\'s DSHMRA approval process. Emphasizes coordination with allied nations on critical mineral development—providing diplomatic support for TMC\'s parallel ISA application process.',
    sourceUrl: 'https://www.whitehouse.gov/briefing-room/statements-releases/2025/06/24/national-energy-dominance-council-delivers-100-day-action-plan'
  },
  {
    id: '4',
    date: parseISO('2025-03-27'),
    type: 'Company',
    title: 'Company Press Release: "The Metals Company to Apply for Permits under Existing U.S. Mining Code for Deep-Sea Minerals in the High Seas in Second Quarter of 2025"',
    description: 'Public commitment to the U.S. regulatory path; initiates pre-application consultations with NOAA and signals the shift from an ISA-only strategy. Sets the Q2 filing roadmap underpinning the entire U.S. permitting timeline. Announces formation of a dedicated U.S. Regulatory Affairs division with former NOAA and DOI officials to navigate the DSHMRA process. Details preliminary engagement with key congressional committees and administration officials about the strategic importance of deep-sea nodules for U.S. mineral security. Triggers a series of technical briefings with NOAA\'s Deep Seabed Mining Office and offshore energy regulators to scope application requirements.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/metals-company-apply-permits-under-existing-us-mining-code-deep'
  },
  {
    id: '5',
    date: parseISO('2025-04-09'),
    type: 'Policy',
    title: 'Executive Order 2025-04-09, "Restoring America\'s Maritime Dominance" signed',
    description: 'Establishes a whole-of-government strategy to rebuild U.S. shipyards, ports, and the maritime workforce (Secs 2–3); modernize critical facilities (Sec 14); leverage DPA Title III for domestic shipbuilding (Sec 4). Provides the policy backbone for TMC\'s vessel commissioning, crewing, and port operations. Directs DOT and DOD to create a Maritime Workforce Pipeline Initiative that will ensure skilled personnel availability for TMC\'s offshore operations. Establishes dedicated funding mechanisms for port infrastructure improvements and specialized offshore support vessel construction that TMC can leverage for its collection operations.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/04/restoring-americas-maritime-dominance/'
  },
  {
    id: '6',
    date: parseISO('2025-04-15'),
    type: 'Policy',
    title: 'Presidential Memorandum "Updating Permitting Technology for the 21st Century" signed',
    description: 'Directs CEQ to establish a Permitting Innovation Center and, within 30 days (due May 15, 2025), issue a Permitting Technology Action Plan (PTAP) defining NEPA data-exchange protocols, software standards, and automation strategies. Critical to compressing what is normally a multi-year Draft/Final EIS process into months. The Innovation Center will pioneer machine-learning tools to accelerate environmental review processes and reduce redundant analyses across agencies. Enables TMC to submit digital environmental baseline data in standardized formats that can be more rapidly processed by regulatory agencies.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/04/updating-permitting-technology-for-the-21st-century/'
  },
  {
    id: '7',
    date: parseISO('2025-04-15'),
    type: 'Policy',
    title: 'Executive Order 2025-04-15, "Ensuring National Security and Economic Resilience Through Section 232 Actions on Processed Critical Minerals and Derivative Products" signed',
    description: 'Launches a Section 232 investigation into imports of processed critical minerals (nickel sulfate, cobalt, copper derivatives) to assess supply-chain vulnerabilities and national-security risks. Its scope (Sec 3) dictates whether tariffs, quotas, or incentives are imposed—directly shaping the economics of TMC\'s downstream nodule-refining and offtake agreements. Orders Commerce to complete a preliminary determination of strategic mineral supply chain risks within 90 days, with a focus on battery metals that polymetallic nodules contain in abundance. Creates a formal interagency review process to evaluate defense requirements for critical minerals and potential for domestic processing capacity expansion.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/04/ensuring-national-security-through-section-232-actions-critical-minerals/'
  },
  {
    id: '8',
    date: parseISO('2025-04-24'),
    type: 'Policy',
    title: 'Executive Order 2025-04-24, "Unleashing America\'s Offshore Critical Minerals and Resources" signed',
    description: 'Declares seabed minerals a U.S. strategic priority; directs NOAA/BOEM to expedite DSHMRA & OCSLA permitting (Sec 3). Mandates 60-day interagency reports on exploration, processing, mapping, allied engagement, and Defense Stockpile feasibility—synchronizing every stakeholder TMC needs for a fast-tracked permit path. Creates a Deep Seabed Minerals Working Group co-chaired by NOAA and DOD to coordinate all federal activities related to polymetallic nodules. Directs Navy oceanographic assets to prioritize bathymetric mapping of CCZ areas where U.S. companies hold exploration rights, directly benefiting TMC\'s NORI and TOML areas.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/04/unleashing-americas-offshore-critical-minerals-and-resources/'
  },
  {
    id: '9',
    date: parseISO('2025-04-29'),
    type: 'Policy',
    title: 'DSHMRA Filing: Submission of exploration-license & commercial-recovery-permit applications to NOAA',
    description: 'Under the Deep Seabed Hard Mineral Resources Act (30 U.S.C. §1401 et seq.) and NOAA regs (15 C.F.R. §§970–971), these filings trigger mandatory 30-day (exploration) and 60-day (commercial) "completeness" reviews before any NEPA scoping or EIS work can begin. TMC cannot proceed with offshore operations or vessel financing until these gateways clear. The applications include detailed environmental monitoring plans, collector design specifications, and metallurgical processing flow sheets for the nodules. Submission represents over 80,000 pages of technical documentation, baseline studies, and economic analyses—the most comprehensive deep-sea mining package ever prepared for U.S. regulators.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/world-first-tmc-usa-submits-application-commercial-recovery-deep'
  },
  {
    id: '10',
    date: parseISO('2025-04-30'),
    type: 'Policy',
    title: 'CEQ Memorandum "Establishment of Permitting Innovation Center" issued',
    description: 'Implements the April 15 memorandum by standing up the Permitting Innovation Center within 15 days to design/test prototype digital tools and coordinate agencies. Key to automating permit workflows and accelerating TMC\'s environmental reviews. The Center will develop standardized data templates for environmental baseline studies that TMC can use to efficiently organize its extensive CCZ ecosystem research. Establishes a "NEPA Accelerator" pilot program that TMC\'s DSHMRA application will participate in, using cloud-based review tools to compress traditional timeframes.',
    sourceUrl: 'https://www.whitehouse.gov/articles/2025/04/the-white-house-council-on-environmental-quality-establishes-permitting-innovation-center/'
  },
  {
    id: '11',
    date: parseISO('2025-05-09'),
    type: 'Policy',
    title: 'Executive Order 2025-04-09 Sec 14(a)(i): U.S. Merchant Marine Academy facilities-staff hiring due (due May 9, 2025)',
    description: 'Requires DOT to recruit and train maintenance and technical staff at the U.S. Merchant Marine Academy within 30 days. Ensures a pipeline of mariners, inspectors, and shipyard technicians that TMC\'s deep-sea vessels will rely on for safe offshore operations and ongoing upkeep. Includes specialized training modules for deep-ocean mining vessel operations and subsea equipment maintenance. Creates a Maritime Technology Innovation lab that will collaborate with TMC on autonomous collector vehicle operations and remote monitoring systems.',
    sourceUrl: 'https://www.whitehouse.gov/presidential-actions/2025/04/restoring-americas-maritime-dominance/'
  },
  {
    id: '12',
    date: parseISO('2025-05-12'),
    type: 'Company',
    title: 'TMC Q1 2025 Earnings Release & Call',
    description: 'Provides management\'s update on PFS timing, NOAA-filing progress, and early environmental/regulatory insights. Q1 results take ~6 weeks post-quarter to audit, prepare slides, and host analysts—making this a key near-term investor catalyst. Expected to include preliminary CapEx estimates for the offshore collection system and updates on discussions with potential offtake partners. Will address analyst questions about the dual-track permitting approach (U.S. DSHMRA and ISA) and the implications for project financing.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/metals-company-reports-first-quarter-2025-results'
  },
  {
    id: '13',
    date: parseISO('2025-05-29'),
    type: 'Company',
    title: '2025 Annual Meeting of Shareholders at 10:00 AM EDT',
    description: 'Formal governance vote and live Q&A, typically accompanied by strategic updates on permitting, financing, PFS status, and regulatory milestones. Must occur within ~6 months of fiscal year-end under corporate bylaws. Board will seek shareholder approval for expanded financing authorities to support vessel conversion and collection system fabrication. Management expected to present detailed timeline for regulatory milestones and answer questions about the U.S. policy environment for deep-sea mining.',
    sourceUrl: 'https://investors.metals.co/annual-meeting/2025-proxy-materials'
  },
  {
    id: '14',
    date: parseISO('2025-05-29'),
    type: 'Policy',
    title: 'DSHMRA: 30-day completeness review for exploration-license applications due (due May 29, 2025)',
    description: 'Under DSHMRA §107 and NOAA regs (15 C.F.R. §970.118), NOAA has 30 days to determine whether TMC\'s exploration-license apps meet substantial compliance. Any deficiency letter pauses the clock—forcing TMC to address technical or environmental-monitoring gaps before NEPA scoping. This is the first major regulatory milestone confirming that TMC\'s application package meets minimum legal requirements. NOAA staff will evaluate whether TMC\'s environmental monitoring plans, vessel specifications, and collector technology designs are sufficiently detailed to begin formal review.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/world-first-tmc-usa-submits-application-commercial-recovery-deep'
  },
  {
    id: '15',
    date: parseISO('2025-05-30'),
    type: 'Policy',
    title: 'Permitting Technology Action Plan due (due May 15, 2025)',
    description: 'CEQ must publish the PTAP by May 15, 2025, detailing NEPA data-exchange standards, software interoperability guidelines, and prototype automation requirements to slash iterative review cycles and accelerate Draft and Final EIS phases. The plan establishes API standards for environment-data submission that will allow TMC\'s vast CCZ ecosystem dataset to be efficiently ingested into NEPA tools. Introduces machine-learning tools that can compare TMC\'s deep-sea mining impacts against benchmarks from similar seabed activities to automate portions of the analysis process.',
    sourceUrl: 'https://www.whitehouse.gov/ceq/briefing-room/2025/05/30/permitting-technology-action-plan'
  },
  {
    id: '16',
    date: parseISO('2025-06-23'),
    type: 'Policy',
    title: 'Executive Order 2025-04-24 Sec 3 (60 days): "Unleashing America\'s Offshore Critical Minerals & Resources" deliverables due (due Jun 23, 2025)',
    description: 'Agencies must (i) expedite DSHMRA permits, (ii) report on exploration & processing opportunities, (iii) finalize seabed-mapping plans, (iv) align allied-engagement strategies, and (v) deliver Defense Stockpile feasibility—all prerequisites for TMC\'s permit approvals and technical planning. The seabed mapping report will identify priority areas within TMC\'s CCZ contract areas that Navy and NOAA vessels will survey to support environmental baseline work. The processing opportunities report will identify domestic metallurgical facilities that could be retrofitted to handle polymetallic nodules under DPA Title III funding.',
    sourceUrl: 'https://www.commerce.gov/reports/2025/06/critical-minerals-offshore-resources-assessment'
  },
  {
    id: '17',
    date: parseISO('2025-06-27'),
    type: 'Company',
    title: 'ISA Submission: NORI (TMC USA) submits exploitation-contract application to the International Seabed Authority (ISA)',
    description: 'Marks the first-ever ISA commercial-exploitation application by a U.S. sponsor. Aligns with ISA\'s two-year notice rule and the 30th session schedule, creating a parallel global review that could inform or reinforce NOAA\'s permitting decisions for TMC. The application includes over 8,000 pages of environmental impact assessment data, resource estimates, and production plans. Positions TMC as first-mover in the global deep-sea minerals regime while maintaining the primary U.S. regulatory path. Creates diplomatic leverage between the U.S. government and ISA that may accelerate both regulatory processes.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/tmc-announces-june-27-2025-submission-date-subsidiary-noris-isa'
  },
  {
    id: '18',
    date: parseISO('2025-06-28'),
    type: 'Policy',
    title: 'DSHMRA: 60-day completeness review for commercial-recovery-permit application due (due Jun 28, 2025)',
    description: 'Under DSHMRA §1413(b), NOAA must declare TMC\'s commercial-permit application complete within 60 days, triggering formal NEPA scoping and public comment—balancing environmental safeguards with strategic mineral needs before Draft EIS work begins. This determination converts TMC\'s application from a conceptual proposal to an officially-recognized commercial plan eligible for environmental review. Initiates the formal NEPA clock and allows NOAA to schedule public scoping meetings and engage cooperating agencies in the review process.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/world-first-tmc-usa-submits-application-commercial-recovery-deep'
  },
  {
    id: '19',
    date: parseISO('2025-05-15'),
    type: 'Company',
    title: 'Pre-Feasibility Study (PFS) Release (Q2 2025)',
    description: 'Completes site-characterization, metallurgical testing, economic modelling, and expert reviews—typically a multi-month process involving lab pilots, expert validation, and capital-cost estimates. The PFS underpins both U.S. and ISA permit filings and serves as a key technical catalyst. Contains detailed net present value calculations under various metal price scenarios, CAPEX requirements for offshore collection systems and onshore processing, and schedules for construction and commissioning. Demonstrates technical and economic viability of TMC\'s deep-sea nodule collection system at commercial scale based on successful pilot trials.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/metals-company-announces-completion-pre-feasibility-study'
  },
  {
    id: '20',
    date: parseISO('2025-07-07'),
    type: 'Policy',
    title: 'ISA 30th Session (Council Jul 7–18; Assembly Jul 21–25)',
    description: 'The ISA Council & Assembly will review NORI\'s exploitation application and potential mining-code regulations. Outcomes could set environmental standards and fast-track processes influencing both ISA and NOAA pathways for TMC\'s project. Marks the first formal consideration of a commercial nodule recovery application at the international level. U.S. diplomatic strategy will emphasize coordination between ISA and NOAA processes to reduce regulatory duplication and streamline requirements for TMC\'s parallel approvals.',
    sourceUrl: 'https://www.isa.org.jm/sessions/30th-session-2025'
  },
  {
    id: '21',
    date: parseISO('2025-07-08'),
    type: 'Policy',
    title: 'Executive Order 2025-04-09 Sec 7/8/11/12/13/15 (90 days): "Restoring America\'s Maritime Dominance" interagency deliverables due (due Jul 8, 2025)',
    description: 'Requires USTR/Commerce ally-engagement & incentive plans (Secs 7/8); designation of Maritime Prosperity Zones (Sec 11); federal maritime-program inventory (Sec 12); workforce-pipeline recommendations (Sec 13); procurement-efficiency proposals (Sec 15)—defining grants, port-upgrade funding, and training pipelines that TMC will leverage for its deep-sea fleet. The Maritime Prosperity Zones will identify specific ports for preferential funding and regulatory treatment, potentially providing TMC with advantageous operating bases. The workforce recommendations will include specialized training programs for deep-sea mining vessel operators and technicians funded through federal grants.',
    sourceUrl: 'https://www.transportation.gov/maritime/reports/2025/maritime-dominance-deliverables'
  },
  {
    id: '22',
    date: parseISO('2025-07-14'),
    type: 'Policy',
    title: 'Executive Order 2025-04-15 Sec 3(c)(i) (90 days): Draft interim Section 232 report due (due Jul 14, 2025)',
    description: 'Commerce must analyze import volumes, geopolitical risks, processing-capacity gaps, and supply-chain vulnerabilities. These findings feed directly into TMC\'s PFS assumptions, tariff-incentive modelling, and domestic-processing strategy.',
    sourceUrl: 'https://www.commerce.gov/reports/2025/section-232-critical-minerals-interim-report'
  },
  {
    id: '23',
    date: parseISO('2025-07-15'),
    type: 'Policy',
    title: 'Federal Register Notice of Intent (NOI) Published (Q3 2025)',
    description: 'Publication of the NOI in the Federal Register (40 C.F.R. §1501.7) triggers a 30–60 day public scoping period under NEPA. NOAA gathers stakeholder input (fisheries, tribes, conservation groups) to define the range of alternatives and data needs that TMC\'s Draft EIS must address. This scoping process is required under DSHMRA §1419, which mandates NEPA compliance for all commercial recovery permits, ensuring that environmental concerns are thoroughly evaluated before any permit issuance.',
    sourceUrl: 'https://www.federalregister.gov/documents/2025/07/15/tmc-deep-seabed-mining-notice-of-intent'
  },
  {
    id: '24',
    date: parseISO('2025-07-29'),
    type: 'Policy',
    title: 'Executive Order 2025-04-15 Sec 3(c)(ii) (15 days): Comments on draft interim Section 232 report due (due Jul 29, 2025)',
    description: 'Interagency stakeholders (Treasury, DoD, USTR, etc.) refine and finalize policy recommendations on tariffs, quotas, and incentives—ensuring balanced defense, economic, and trade considerations that TMC must incorporate into its offtake and financing models.',
    sourceUrl: 'https://www.commerce.gov/reports/2025/section-232-critical-minerals-comments'
  },
  {
    id: '25',
    date: parseISO('2025-10-06'),
    type: 'Policy',
    title: 'Executive Order 2025-04-09 Sec 4 (180 days): Defense-Industrial-Base Assessment due (due Oct 6, 2025)',
    description: 'Directs DoD, Commerce, DOT & DHS to evaluate DPA Title III authorities and private-sector financing options for U.S. shipbuilding capacity, component supply chains, and port infrastructure. This 180-day study underpins loan and grant programs that TMC will leverage to retrofit existing vessels or commission new deep-sea collection ships.',
    sourceUrl: 'https://www.defense.gov/reports/2025/defense-industrial-base-maritime-assessment'
  },
  {
    id: '26',
    date: parseISO('2025-10-12'),
    type: 'Policy',
    title: 'Executive Order 2025-04-15 Sec 3(c)(iii) (180 days): Final Section 232 report & recommendations due (due Oct 12, 2025)',
    description: 'Commerce must deliver a final Section 232 report with policy options—tariffs, quotas, incentives, or safeguards—to mitigate national-security risks from imported processed minerals. These decisions will directly shape TMC\'s refining economics and offtake negotiations.',
    sourceUrl: 'https://www.commerce.gov/reports/2025/section-232-critical-minerals-final-report'
  },
  {
    id: '27',
    date: parseISO('2025-11-05'),
    type: 'Policy',
    title: 'Executive Order 2025-04-09 Sec 3(a) (210 days): Maritime Action Plan (MAP) submission due (due Nov 5, 2025)',
    description: 'Consolidates all directives from "Restoring America\'s Maritime Dominance" into a unified roadmap—covering Buy-American rules, funding priorities, regulatory reforms, and global trade alignment. The MAP specifies when and how federal support flows to shipyards, ports, and workforce programs critical to TMC\'s operations.',
    sourceUrl: 'https://www.transportation.gov/maritime/reports/2025/maritime-action-plan'
  },
  {
    id: '28',
    date: parseISO('2025-12-31'),
    type: 'Policy',
    title: 'Defense Department Feasibility Study on Domestic PMN Refining due',
    description: 'Mandated by FY 2025 NDAA (P.L. 118-159), the Secretary of Defense must report to the Armed Services Committees by Dec 31, 2025 on the feasibility of refining polymetallic nodule intermediates into high-purity nickel, cobalt sulfate, and copper for defense applications—specifically regarding domestic nodule refining.',
    sourceUrl: 'https://www.defense.gov/reports/2025/polymetallic-nodule-refining-feasibility'
  },
  {
    id: '29',
    date: parseISO('2025-10-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement Issued',
    description: 'After ~12 months of baseline studies, interagency consultation (NOAA → EPA → CEQ), and incorporation of scoping comments, NOAA publishes the Draft EIS for a 45-day comment period (40 C.F.R. §1503.1). This document analyzes potential environmental impacts of TMC\'s proposed recovery activities and allows public input on required mitigations. This accelerated timeline assumes 75% compression of the typical EIS process, as mandated by Executive Orders 2025-03-20 and 2025-04-24 which direct agencies to expedite critical minerals permitting. DSHMRA §1419(d) requires compliance with all NEPA provisions while enabling the fast-tracking directed by the Presidential actions.',
    isVariableTimeline: true,
    compressionLevel: '75%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '30',
    date: parseISO('2026-01-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement Issued',
    description: 'Compressed to ~6 months from NOI (50% scenario). This timeline assumes moderate implementation of the expedited permitting mandates from Executive Orders, particularly the Permitting Technology Action Plan and the "Immediate Measures to Increase American Mineral Production" directives. Under this scenario, NOAA prepares the Draft EIS in half the typical time through enhanced PTAP digital workflows and parallel processing, then opens the mandatory 45-day comment period (40 C.F.R. §1503.1).',
    isVariableTimeline: true,
    compressionLevel: '50%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '31',
    date: parseISO('2026-07-15'),
    type: 'Policy',
    title: 'Draft Environmental Impact Statement Issued',
    description: 'Standard ~12-month Draft EIS timeline from NOI, assuming no implementation of executive fast-tracking directives. This scenario represents the traditional NEPA process without the expediting effects of the Presidential mandates. NOAA would complete comprehensive baseline studies, interagency consultations, and thorough analysis of public scoping comments before publishing the Draft EIS for the 45-day public comment period.',
    isVariableTimeline: true,
    compressionLevel: 'Typical',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '32',
    date: parseISO('2025-11-07'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'NOAA addresses all substantive Draft EIS comments, finalizes analyses and mitigation measures, then files the Final EIS. At least 30 days after EPA\'s Notice of Availability, NOAA issues the ROD. This highly accelerated timeline assumes 75% compression as directed by the Presidential mandates to expedite critical minerals permitting under Executive Orders 14213 and 2025-04-24. The scenario reflects maximum implementation of the permit streamlining and NEPA acceleration tools developed under the Permitting Technology Action Plan.',
    isVariableTimeline: true,
    compressionLevel: '75%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '33',
    date: parseISO('2026-03-01'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'Compressed to ~3 months post-Draft (50% scenario). This timeline assumes partial implementation of the expedited permitting directives from Executive Orders. NOAA expedites review of public comments, finalizes environmental analyses and required mitigation measures, and issues the ROD after the mandatory 30-day waiting period, balancing thoroughness with the Presidential mandate to accelerate critical minerals permitting.',
    isVariableTimeline: true,
    compressionLevel: '50%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '34',
    date: parseISO('2026-10-15'),
    type: 'Policy',
    title: 'Final EIS & Record of Decision (ROD) Issued',
    description: 'Standard ~6-month post-Draft timeline. NOAA follows traditional timeframes to thoroughly address all public comments on the Draft EIS, prepare the Final EIS, allow for EPA\'s review, and issue the ROD after the minimum 30-day waiting period. This timeline represents full compliance with all procedural requirements of DSHMRA §1419 and NEPA without executive acceleration.',
    isVariableTimeline: true,
    compressionLevel: 'Typical',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '35',
    date: parseISO('2025-11-29'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Within 90 days of the ROD, NOAA finalizes and issues TMC\'s commercial-recovery permit—subject to any antitrust review by DOJ/FTC. This scenario assumes maximum implementation of Executive Order mandates for expedited permitting, with the 90-day review period running in parallel with other administrative processes. The compressed timeline reflects the whole-of-government approach to critical minerals established by Executive Order 14213 and the specific DSHMRA expediting directed in Executive Order 2025-04-24.',
    isVariableTimeline: true,
    compressionLevel: '75%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '36',
    date: parseISO('2026-04-15'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Compressed to ~45 days post-ROD (50% scenario). NOAA expedites the final permit preparation, incorporating all ROD-specified conditions and environmental protections required under §1419. The permit includes all necessary terms and restrictions under §1420, conservation requirements under §1417, and triggers the international coordination requirements of §1428. This accelerated timeline satisfies DSHMRA\'s mandate to reduce foreign dependency (§1402) while maintaining environmental safeguards.',
    isVariableTimeline: true,
    compressionLevel: '50%',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '37',
    date: parseISO('2027-01-13'),
    type: 'Policy',
    title: 'Permit Issuance under DSHMRA',
    description: 'Standard 90-day post-ROD timeline. Following the final EIS and ROD, NOAA issues the commercial recovery permit as authorized under 30 USC §1413, after completing the full antitrust review period. The permit includes comprehensive environmental protection measures under §1419, resource conservation requirements under §1417, and all terms and conditions required by §1420. As required by §1428, the permit triggers coordination with the State Department regarding TMC\'s activities in relation to the International Seabed Authority, establishing the framework for commercial operations.',
    isVariableTimeline: true,
    compressionLevel: 'Typical',
    sourceUrl: 'https://uscode.house.gov/view.xhtml?path=/prelim@title30/chapter26&edition=prelim'
  },
  {
    id: '40',
    date: parseISO('2025-02-18'),
    type: 'Company',
    title: 'TMC and PAMCO Achieve Breakthrough in Polymetallic Nodule Processing',
    description: 'TMC announces a significant technological milestone with Pacific Metals Co. (PAMCO) in processing deep-sea polymetallic nodules. This collaboration demonstrates successful extraction of critical battery metals (nickel, copper, cobalt, and manganese) using an environmentally-superior processing method. The breakthrough validates TMC\'s metallurgical strategy and bolsters the commercial viability argument in their permit applications. By proving efficient extraction technology exists for nodule resources, TMC addresses a key technical requirement under DSHMRA §1413(c) regarding technological capability. This achievement strengthens investor confidence and provides evidence to regulators that the full value chain from collection to processing has been commercially validated.',
    sourceUrl: 'https://investors.metals.co/news-releases/news-release-details/world-first-tmc-and-pamco-achieve-new-nodule-processing'
  }
];

// Sort the events chronologically by date and export
export const timelineEvents = unsortedEvents.sort((a, b) => 
  a.date.getTime() - b.date.getTime()
);
