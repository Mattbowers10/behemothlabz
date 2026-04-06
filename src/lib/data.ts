import type { Product, ResearchSet, ServiceReview, Article } from '@/types';

export const products: Product[] = [
  {
    id: 'rad-140-liquid',
    slug: 'rad-140-testolone-liquid',
    name: 'RAD-140 Testolone Liquid',
    chemicalName: 'RAD-140 (Testolone)',
    casNumber: '1182367-47-0',
    molecularFormula: 'C20H16ClN5O2',
    molecularWeight: '393.83 g/mol',
    purity: '≥99%',
    category: 'sarms',
    forms: ['liquid'],
    variants: [
      { id: 'rad140-30ml-10mg', label: '30ml / 10mg/ml', price: 33.25, inStock: true },
      { id: 'rad140-60ml-10mg', label: '60ml / 10mg/ml', price: 59.99, inStock: true },
      { id: 'rad140-1500mg', label: '150ml / 10mg/ml', price: 187.49, inStock: true },
    ],
    shortDescription: 'Selective androgen receptor modulator under preclinical investigation for tissue-selective binding properties.',
    overview: 'RAD-140 is a selective androgen receptor modulator (SARM) being investigated in preclinical research for tissue-selective binding properties. This compound demonstrates binding affinity for the androgen receptor with reported selectivity for anabolic tissues. Published research indicates RAD-140 exhibits activity in in vitro receptor assays and preliminary animal models. This compound is provided for legitimate research, laboratory, and scientific purposes only.',
    storageConditions: 'Store at 4°C. Keep away from light and moisture. Stable for 24 months when stored properly.',
    batchNumber: 'BL-2026-R140-04',
    coaUrl: '/coa/rad-140-BL-2026-R140-04.pdf',
    sdsUrl: '/sds/rad-140.pdf',
    images: ['/products/rad-140-bottle.jpg', '/products/rad-140-label.jpg'],
    isFeatured: true,
    reviewCount: 127,
    reviewAverage: 4.8,
  },
  {
    id: 'mk677-caps',
    slug: 'mk-677-ibutamoren-capsules',
    name: 'MK-677 Ibutamoren Capsules',
    chemicalName: 'MK-677 (Ibutamoren)',
    casNumber: '159752-10-0',
    molecularFormula: 'C27H36N4O5S',
    molecularWeight: '528.66 g/mol',
    purity: '≥98%',
    category: 'sarms',
    forms: ['capsules'],
    variants: [
      { id: 'mk677-30ct-25mg', label: '30ct / 25mg', price: 71.39, inStock: true },
      { id: 'mk677-60ct-25mg', label: '60ct / 25mg', price: 134.14, inStock: true },
    ],
    shortDescription: 'Ghrelin receptor agonist and growth hormone secretagogue under investigation in preclinical research.',
    overview: 'MK-677 is a ghrelin receptor agonist and growth hormone secretagogue under investigation in preclinical research. This compound stimulates growth hormone and IGF-1 release through ghrelin receptor activation. Published research suggests MK-677 may support bone density parameters in animal models. Note: MK-677 is a ghrelin receptor agonist, not a SARM by strict classification. This compound is provided for laboratory and research applications only.',
    storageConditions: 'Store at room temperature (15–25°C). Keep in sealed container away from moisture.',
    batchNumber: 'BL-2026-MK677-03',
    coaUrl: '/coa/mk677-BL-2026-MK677-03.pdf',
    images: ['/products/mk677-bottle.jpg'],
    isFeatured: true,
    reviewCount: 89,
    reviewAverage: 4.7,
  },
  {
    id: 'ostarine-liquid',
    slug: 'ostarine-mk-2866-liquid',
    name: 'Ostarine (MK-2866) Liquid',
    chemicalName: 'Ostarine (MK-2866, Enobosarm)',
    casNumber: '841205-47-8',
    molecularFormula: 'C19H14F3N3O3',
    molecularWeight: '389.33 g/mol',
    purity: '≥99%',
    category: 'sarms',
    forms: ['liquid'],
    variants: [
      { id: 'ost-30ml-25mg', label: '30ml / 25mg/ml', price: 27.50, inStock: true },
      { id: 'ost-150ml-25mg', label: '150ml / 25mg/ml', price: 158.83, inStock: true },
    ],
    shortDescription: 'Non-steroidal selective androgen receptor modulator showing tissue selectivity in preclinical studies.',
    overview: 'Ostarine is a non-steroidal selective androgen receptor modulator showing tissue selectivity in preclinical studies. This compound binds to the androgen receptor with preferential activity in skeletal muscle and bone tissues, as observed in in vitro assays. Provided for research and scientific investigation only.',
    storageConditions: 'Store at 4°C. Protect from light.',
    batchNumber: 'BL-2026-OST-05',
    coaUrl: '/coa/ostarine-BL-2026-OST-05.pdf',
    images: ['/products/ostarine-bottle.jpg'],
    isFeatured: true,
    reviewCount: 204,
    reviewAverage: 4.9,
  },
  {
    id: 'bpc157-caps',
    slug: 'bpc-157-capsules',
    name: 'BPC-157 Capsules',
    chemicalName: 'BPC-157 (Body Protection Compound-157)',
    casNumber: '137525-51-0',
    molecularFormula: 'C62H98N16O22',
    molecularWeight: '1419.55 g/mol',
    purity: '≥98%',
    category: 'peptides',
    forms: ['capsules'],
    variants: [
      { id: 'bpc157-30ct-500mcg', label: '30ct / 500mcg', price: 44.99, inStock: true },
      { id: 'bpc157-60ct-500mcg', label: '60ct / 500mcg', price: 84.99, inStock: true },
    ],
    shortDescription: 'Pentadecapeptide under investigation for tissue response modeling in preclinical studies.',
    overview: 'BPC-157 is a pentadecapeptide derived from a protective stomach protein, currently under investigation for tissue response modeling. Preclinical research has examined this compound\'s activity in various in vitro and animal model assays related to cellular signaling pathways. This compound is provided for legitimate research and laboratory purposes only.',
    storageConditions: 'Store at -20°C for long-term storage. Stable at 4°C for up to 30 days.',
    batchNumber: 'BL-2026-BPC-02',
    coaUrl: '/coa/bpc157-BL-2026-BPC-02.pdf',
    images: ['/products/bpc157-bottle.jpg'],
    isFeatured: true,
    reviewCount: 156,
    reviewAverage: 4.8,
  },
  {
    id: 'semax-nasal',
    slug: 'semax-nasal-spray',
    name: 'Semax Nasal Spray',
    chemicalName: 'Semax (ACTH 4-7 Pro-Gly-Pro)',
    casNumber: '80714-61-4',
    molecularFormula: 'C37H51N9O10S',
    molecularWeight: '813.93 g/mol',
    purity: '≥98%',
    category: 'peptides',
    forms: ['nasal-spray'],
    variants: [
      { id: 'semax-10ml-1pct', label: '10ml / 1% (100mcg/spray)', price: 49.99, inStock: true },
    ],
    shortDescription: 'Heptapeptide analog of ACTH 4-10 under investigation in cognitive pathway research models.',
    overview: 'Semax is a synthetic heptapeptide analog of ACTH 4-10, under investigation for its interactions with cognitive pathway mechanisms in preclinical research. Studies have examined its activity in neurotrophin regulation assays and receptor binding in animal models. This aerosolized delivery format is provided for laboratory research use only. RESEARCH USE ONLY: Not for human consumption or administration.',
    storageConditions: 'Store at -20°C for long-term storage. Once reconstituted, stable at 4°C for 30 days.',
    batchNumber: 'BL-2026-SEX-01',
    coaUrl: '/coa/semax-BL-2026-SEX-01.pdf',
    images: ['/products/semax-spray.jpg'],
    isNew: true,
    reviewCount: 43,
    reviewAverage: 4.6,
  },
  {
    id: 'lgd3303-liquid',
    slug: 'lgd-3303-liquid',
    name: 'LGD-3303 Liquid',
    chemicalName: 'LGD-3303',
    casNumber: '1196133-39-7',
    molecularFormula: 'C16H14ClF3N2O',
    molecularWeight: '362.74 g/mol',
    purity: '≥99%',
    category: 'sarms',
    forms: ['liquid'],
    variants: [
      { id: 'lgd3303-30ml-10mg', label: '30ml / 10mg/ml', price: 149.09, inStock: true },
    ],
    shortDescription: 'Selective androgen receptor modulator with reported high binding affinity in preclinical assays.',
    overview: 'LGD-3303 is a selective androgen receptor modulator demonstrating high binding affinity in preclinical receptor assays. Published in vitro data indicate activity at the androgen receptor with reported tissue selectivity. Provided for research and scientific investigation only.',
    storageConditions: 'Store at 4°C. Protect from light and moisture.',
    batchNumber: 'BL-2026-L303-02',
    coaUrl: '/coa/lgd3303-BL-2026-L303-02.pdf',
    images: ['/products/lgd3303-bottle.jpg'],
    reviewCount: 67,
    reviewAverage: 4.7,
  },
];

export const researchSets: ResearchSet[] = [
  {
    id: 'ar-modulator-set',
    slug: 'ar-modulator-research-set',
    name: 'AR Modulator Research Set',
    description: 'A curated multi-compound research kit for investigating androgen receptor modulation. Includes RAD-140 and Ostarine for comparative receptor binding studies.',
    category: 'SARMs',
    productIds: ['rad-140-liquid', 'ostarine-liquid'],
    price: 54.99,
    originalPrice: 68.99,
  },
  {
    id: 'gh-pathway-set',
    slug: 'gh-pathway-research-set',
    name: 'GH Pathway Research Set',
    description: 'Multi-compound kit for growth hormone secretagogue pathway research. Includes MK-677 and BPC-157 for complementary preclinical investigation.',
    category: 'Peptides + SARMs',
    productIds: ['mk677-caps', 'bpc157-caps'],
    price: 109.99,
    originalPrice: 129.99,
  },
];

export const serviceReviews: ServiceReview[] = [
  {
    id: 'rev-1',
    author: 'M. Henderson',
    rating: 5,
    title: 'Fastest shipping I\'ve seen',
    body: 'Ordered on Tuesday afternoon, had it at my lab by Thursday morning. Packaging was excellent — double-sealed and temperature-appropriate for the compounds.',
    date: '2026-03-15',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'D. Reyes',
    rating: 5,
    title: 'COA was right there on the product page',
    body: 'Appreciated having the Certificate of Analysis accessible before I even ordered. Third-party lab results were easy to read and the purity matched exactly what was advertised.',
    date: '2026-03-02',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'J. Kowalski',
    rating: 5,
    title: 'Support team knows their stuff',
    body: 'Had a question about storage conditions for one of the peptide compounds. Support responded within 2 hours with accurate, science-backed information. Impressed.',
    date: '2026-02-22',
    verified: true,
  },
];

export const articles: Article[] = [
  {
    id: 'art-1',
    slug: 'rad-140-mechanism-of-action',
    title: 'RAD-140 (Testolone): Mechanism of Action and Preclinical Research Overview',
    excerpt: 'An examination of RAD-140\'s binding affinity, receptor selectivity profile, and findings from published in vitro and animal model studies.',
    category: 'sarms',
    readTime: 8,
    publishedAt: '2026-03-20',
    relatedProductSlugs: ['rad-140-testolone-liquid'],
    body: [
      {
        paragraphs: [
          'RAD-140, also designated Testolone, is a nonsteroidal selective androgen receptor modulator (SARM) first disclosed in patent literature by Radius Health in 2010. The compound has since been investigated in multiple preclinical studies for its receptor-binding profile and tissue selectivity characteristics.',
          'This overview summarizes publicly available preclinical research data on RAD-140. All information is provided for research and educational purposes only. RAD-140 is not approved for human use by any regulatory authority.',
        ],
      },
      {
        heading: 'Receptor Binding and Selectivity',
        paragraphs: [
          'RAD-140 demonstrates high binding affinity for the androgen receptor (AR), with a reported relative binding affinity (RBA) that compares favorably to testosterone in in vitro competitive binding assays. Structural analyses suggest the compound adopts a conformation at the AR ligand-binding domain that promotes coactivator recruitment in a tissue-selective manner.',
          'Published in vitro data indicate that RAD-140 acts as a full agonist at the AR in anabolic tissue models and as a partial agonist or antagonist in prostate cell line assays. This differential activity profile is the defining characteristic of the SARM compound class and the basis for its investigation as a research tool for dissecting AR-mediated signaling pathways.',
        ],
      },
      {
        heading: 'In Vitro Research Findings',
        paragraphs: [
          'Cell-based reporter assays have demonstrated that RAD-140 activates AR-responsive gene expression constructs at nanomolar concentrations. Transcriptional profiling in treated cell lines reveals differential regulation of AR target genes compared to testosterone, consistent with partial agonist activity in some tissue contexts.',
          'In androgen-sensitive cancer cell line models, RAD-140 has been examined for AR pathway interactions. Data from these studies provide a framework for understanding the compound\'s receptor pharmacology in the context of in vitro research models.',
        ],
      },
      {
        heading: 'Animal Model Studies',
        paragraphs: [
          'Preclinical in vivo studies in rodent models have examined RAD-140\'s pharmacokinetic properties including oral bioavailability, half-life, and tissue distribution. Published data report favorable oral bioavailability relative to steroidal androgens, attributed to the compound\'s metabolic stability.',
          'Studies using orchiectomized animal models have assessed the compound\'s activity at AR-expressing tissues. These models are standard tools in preclinical SARM research for characterizing the tissue selectivity profile of candidate compounds.',
        ],
      },
      {
        heading: 'Research Considerations',
        paragraphs: [
          'RAD-140 remains a research compound without regulatory approval for therapeutic use. Investigators working with this compound should be aware of applicable institutional biosafety requirements and chemical handling protocols for research-grade SARMs.',
          'Published preclinical data should be evaluated in the context of species differences, model limitations, and the absence of controlled human clinical data. Extrapolation from animal models to human biology requires careful consideration of pharmacokinetic and pharmacodynamic differences.',
        ],
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'bpc-157-preclinical-research',
    title: 'BPC-157: Preclinical Research Overview and Molecular Mechanisms',
    excerpt: 'A review of the published preclinical literature on BPC-157, including cellular signaling pathway interactions observed in in vitro and animal model assays.',
    category: 'peptides',
    readTime: 10,
    publishedAt: '2026-03-10',
    relatedProductSlugs: ['bpc-157-capsules'],
    body: [
      {
        paragraphs: [
          'BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide consisting of 15 amino acids, derived from a sequence within the human gastric juice protein BPC. The compound has been the subject of considerable preclinical research interest, with published studies examining its interactions with multiple cellular signaling pathways in in vitro and animal model systems.',
          'This article summarizes publicly available preclinical research findings. BPC-157 has not been approved by the FDA or equivalent regulatory bodies for therapeutic use in humans or animals. All information is provided for research context only.',
        ],
      },
      {
        heading: 'Molecular Structure and Stability',
        paragraphs: [
          'BPC-157 has the amino acid sequence Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val with a molecular weight of approximately 1419.55 g/mol. The compound demonstrates notable stability in gastric acid environments, which has made it a useful tool in gastrointestinal research models.',
          'Unlike many peptides that require parenteral administration to retain activity in in vivo models, BPC-157\'s stability profile has enabled its use in multiple delivery format experiments in animal research, including oral and local administration paradigms.',
        ],
      },
      {
        heading: 'Signaling Pathway Interactions',
        paragraphs: [
          'In vitro studies have examined BPC-157\'s interactions with the nitric oxide (NO) signaling system. Research publications report effects on NO synthase activity in cell culture models, with observed modulation of downstream signaling cascades in endothelial cell assays.',
          'Published research has also examined interactions with the FAK-paxillin pathway in cell migration assays. This pathway involvement has been proposed as a mechanistic basis for the compound\'s observed activities in various in vitro tissue response models, though the precise molecular mechanisms remain under active investigation.',
          'Growth factor receptor interactions, including with VEGFR2 and EGFR pathways, have been reported in cell-based assays. These observations have generated hypotheses about the compound\'s mechanisms that continue to be evaluated in preclinical research settings.',
        ],
      },
      {
        heading: 'Animal Model Research',
        paragraphs: [
          'The majority of published BPC-157 research has been conducted in rodent models. Studies have examined the compound across a range of tissue and organ system models, employing standardized preclinical research methodologies. The research group of Predrag Sikiric at the University of Zagreb has produced the majority of the published literature on this compound.',
          'Rodent model studies have examined BPC-157 in gastrointestinal, musculoskeletal, and neurological research contexts using standard injury and disease models. These studies provide pharmacological data that inform the compound\'s characterization as a research tool.',
        ],
      },
      {
        heading: 'Limitations and Research Context',
        paragraphs: [
          'The preclinical literature on BPC-157 should be evaluated with attention to the concentration ranges, delivery routes, and model-specific factors that may limit direct translation. Many published studies originate from a single research group, and independent replication data are more limited for some reported findings.',
          'Investigators utilizing BPC-157 in preclinical research should consult the primary literature for methodological guidance and be aware that the compound\'s regulatory status varies by jurisdiction. Institutional review and appropriate safety protocols apply.',
        ],
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'how-to-read-a-coa',
    title: 'How to Read a Certificate of Analysis for Research Compounds',
    excerpt: 'Understanding purity percentages, HPLC testing methodology, and what to look for when evaluating third-party COA documentation for research chemicals.',
    category: 'regulatory',
    readTime: 6,
    publishedAt: '2026-02-28',
    body: [
      {
        paragraphs: [
          'A Certificate of Analysis (COA) is a document issued by a laboratory that summarizes the analytical results for a specific batch of a compound. For research chemicals and reference standards, COAs are a critical component of quality documentation — they provide the empirical basis for accepting or rejecting a compound lot for use in research.',
          'This guide explains the key sections of a COA and what to look for when evaluating documentation from a research compound supplier.',
        ],
      },
      {
        heading: 'Lab Accreditation: The Most Important Factor',
        paragraphs: [
          'Before evaluating any analytical data, verify the issuing laboratory\'s accreditation status. For research compound COAs, ISO/IEC 17025 accreditation is the relevant standard. This international standard specifies requirements for the competence of testing and calibration laboratories, covering management system requirements and technical requirements for producing valid results.',
          'ISO/IEC 17025 accreditation requires laboratories to demonstrate technical competence through proficiency testing, measurement traceability, and regular audits by national accreditation bodies. A COA from an ISO/IEC 17025 accredited lab provides significantly stronger quality assurance than one from an unaccredited in-house or affiliated laboratory.',
          'Red flags: COAs issued by the supplier\'s own internal lab, COAs without identifiable laboratory names or accreditation numbers, or COAs that cannot be cross-referenced to an identifiable testing facility.',
        ],
      },
      {
        heading: 'Purity by HPLC',
        paragraphs: [
          'High-Performance Liquid Chromatography (HPLC) is the standard method for quantifying compound purity in research chemical COAs. The technique separates compound components by their interaction with a stationary phase and measures the area under each chromatographic peak to calculate relative percentages.',
          'HPLC purity values represent the percentage of the target compound relative to all UV-absorbing species detected in the chromatogram. A purity of ≥99% by HPLC indicates that at least 99% of the detected signal corresponds to the target compound. It is important to note that HPLC detects UV-absorbing species — compounds or impurities that do not absorb UV light will not appear in standard HPLC analysis.',
          'When evaluating HPLC purity: look for the wavelength used for detection (common values: 214nm for peptides, 254nm or 280nm for small molecules), confirm the method name or reference, and note whether the result is reported as area percentage or weight percentage.',
        ],
      },
      {
        heading: 'Identity Confirmation by NMR',
        paragraphs: [
          'Nuclear Magnetic Resonance (NMR) spectroscopy confirms chemical identity by generating a characteristic spectrum based on the magnetic properties of atomic nuclei in the compound. For research compounds, 1H-NMR (proton NMR) is the most common identity test.',
          'A COA reporting NMR identity confirmation should reference a spectrum that matches the expected structure of the compound. While some COAs include the actual NMR spectrum or a peak table, others state only "conforms" or "matches reference." For higher confidence, request the actual spectrum or a detailed peak assignment from the supplier.',
        ],
      },
      {
        heading: 'Contaminant Screening',
        paragraphs: [
          'Comprehensive COAs for research compounds should include testing for residual solvents, heavy metals, and microbial limits in addition to purity. Residual solvent levels should be evaluated against ICH Q3C guidelines, which specify concentration limits for common process solvents.',
          'Heavy metal screening by ICP-MS (Inductively Coupled Plasma Mass Spectrometry) is the most sensitive and widely used method. Key analytes include lead (Pb), cadmium (Cd), arsenic (As), and mercury (Hg).',
          'Evaluating the full contaminant profile is particularly important for compounds used in cell culture or animal studies, where trace contaminants can confound experimental results.',
        ],
      },
      {
        heading: 'Batch Traceability',
        paragraphs: [
          'Every COA should include a unique batch or lot number that can be cross-referenced to the specific container of compound received. The batch number on the physical product label should match the batch number on the COA.',
          'Reputable suppliers will provide COAs that are searchable by batch number and will match COAs to specific containers at the point of sale. A COA that cannot be linked to a specific received batch provides limited quality assurance value, as it cannot confirm that the tested material corresponds to what was received.',
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}
