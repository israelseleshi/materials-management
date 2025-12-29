import { Chapter31Data, Chapter32Data } from './types';

export const SECTION_3_1_DATA: Chapter31Data = {
  "chapter_metadata": {
    "chapter_number": 3,
    "chapter_title": "Procurement",
    "section_focus": "3.1 Meaning and Role of Purchasing",
  },
  "content_modules": [
    {
      "id": "concept_01",
      "topic": "The Fundamental Distinction: Purchasing vs. Procurement",
      "introduction": "While often used interchangeably in casual conversation, 'Purchasing' and 'Procurement' represent vastly different scopes of responsibility within an organization. Understanding this distinction is the foundation of modern supply chain management.",
      "sub_concepts": [
        {
          "term": "Purchasing",
          "scope": "Narrow / Transactional",
          "academic_definition": "The specific act of obtaining merchandise, capital equipment, raw materials, and services in exchange for money. It is a subset of the broader procurement function.",
          "key_characteristics": [
            "Focuses on the short-term transaction.",
            "Ends typically when the goods are received and paid for.",
            "Reactive in nature (responding to a requisition).",
            "Concerned primarily with price and order placement."
          ],
          "detailed_explanation": "Purchasing is the tactical execution of buying. It involves the clerical and administrative tasks required to convert a need into a tangible order. It includes receiving a purchase requisition, creating a Purchase Order (PO), and arranging payment. It does not typically involve long-term strategy, supplier development, or disposal of assets.",
          "practical_scenario": {
            "context": "Office Supplies",
            "action": "An administrative assistant notices the office is out of printer paper. They go to a pre-approved vendor's website, select 10 boxes of paper, and click 'Buy'.",
            "analysis": "This is pure purchasing. The need was immediate, the action was transactional, and the process ended once the paper was delivered and the invoice paid."
          }
        },
        {
          "term": "Procurement",
          "scope": "Broad / Strategic",
          "academic_definition": "The overarching process of acquiring goods and services. It encompasses the entire supply chain life-cycle, from the identification of a need through to the end of a service contract or the useful life of an asset.",
          "key_characteristics": [
            "Focuses on long-term value and Total Cost of Ownership (TCO).",
            "Includes strategic sourcing, negotiation, and contract management.",
            "Proactive in nature (anticipating future needs).",
            "Involves logistics, inventory control, and waste disposal."
          ],
          "detailed_explanation": "Procurement is a managerial activity. It involves planning, policy formulation, and research. Procurement managers look at the 'big picture': How do we select the best suppliers? How do we transport goods efficiently? How do we store them? How do we dispose of them ethically? It integrates with finance, engineering, and operations to ensure the organization has a competitive advantage.",
          "practical_scenario": {
            "context": "Manufacturing Equipment",
            "action": "A car manufacturer needs a new robotic arm assembly line. The team analyzes global suppliers, assesses the 10-year maintenance costs, negotiates a service contract, plans the shipping logistics from Germany to Ethiopia, and determines how the robots will be recycled after 15 years.",
            "analysis": "This is procurement. It involves financing, leasing decisions, life-cycle analysis, logistics, and long-term supplier relationship management, far beyond just 'buying' the robots."
          }
        }
      ],
      "comparison_matrix": {
        "focus": {
          "purchasing": "Price (What is on the invoice)",
          "procurement": "Cost (Total Cost of Ownership)"
        },
        "timeline": {
          "purchasing": "Immediate / Short-term",
          "procurement": "Life-cycle / Long-term"
        },
        "relationship": {
          "purchasing": "Transactional / Arm's length",
          "procurement": "Collaborative / Partnership"
        }
      }
    },
    {
      "id": "concept_02",
      "topic": "The 5 Principles (The 5 Rights) of Purchasing",
      "introduction": "For purchasing to be effective and efficient, it must satisfy five specific criteria simultaneously. Failure in any one of these 'Rights' results in a failure of the entire purchasing function.",
      "principles": [
        {
          "name": "Right Quality",
          "definition": "Suitability of an item for its intended purpose.",
          "detailed_explanation": "Quality in purchasing does not necessarily mean 'the best possible quality available in the world,' but rather the 'right' quality for the specific job. Buying a gold-plated hammer for a construction site is 'high quality' but the 'wrong quality' decision because it is wasteful. The item must meet the technical specifications and performance requirements without unnecessary cost.",
          "consequences_of_failure": "If quality is too low, production lines halt, or defects increase. If quality is too high (gold-plating), the company wastes money on unnecessary features.",
          "practical_example": "A fast-food chain buying napkins. They need napkins that are absorbent enough to clean hands (Right Quality), but they do not need linen or silk napkins (Too High Quality) nor tissue paper that falls apart instantly (Too Low Quality)."
        },
        {
          "name": "Right Quantity",
          "definition": "The exact amount needed to maintain operations without incurring excess inventory costs.",
          "detailed_explanation": "This involves balancing the cost of ordering against the cost of holding inventory. Modern purchasing uses mathematical models like Economic Order Quantity (EOQ) to determine this. It is driven by market demand and production schedules.",
          "consequences_of_failure": "Buying too little leads to 'stockouts,' stopping production and losing sales. Buying too much ties up cash in inventory (Cash Flow probems), increases storage costs, and risks obsolescence (goods expiring or becoming outdated).",
          "practical_example": "A bakery purchasing flour. If they buy 100 bags but only use 10 a week, the flour may get weevils or spoil (Over-buying). If they buy 1 bag and run out by Wednesday, they cannot bake bread for Thursday (Under-buying)."
        },
        {
          "name": "Right Price",
          "definition": "The fair market value that grants the supplier a healthy profit while providing the buyer with a competitive cost advantage.",
          "detailed_explanation": "The 'Right Price' is not always the 'Lowest Price'. It is the price that represents the best value when reliability, quality, and delivery are considered. It relates to the economic value the buyer places on the item and its anticipated selling price.",
          "consequences_of_failure": "Paying too much erodes profit margins. Squeezing a supplier for a price that is too low may cause the supplier to cut corners on quality or go bankrupt, disrupting supply.",
          "practical_example": "A smartphone manufacturer buying screens. Supplier A offers screens at $50 but has a 10% defect rate. Supplier B offers screens at $55 with a 0% defect rate. Supplier B represents the 'Right Price' because the cost of replacing defective screens from Supplier A makes the real cost higher than $55."
        },
        {
          "name": "Right Delivery (Time & Place)",
          "definition": "Ensuring materials arrive exactly when needed and at the correct location.",
          "detailed_explanation": "This principle is the backbone of Just-In-Time (JIT) manufacturing. It minimizes the need for warehousing. It involves selecting the right mode of transportation and ensuring suppliers have the capacity to meet deadlines.",
          "consequences_of_failure": "Early delivery requires storage space and ties up capital before necessary. Late delivery causes production stoppages (downtime costs often exceed the cost of the material itself). Wrong place delivery incurs additional shipping and handling costs.",
          "practical_example": "A construction site needs wet concrete. It must be delivered at the exact hour the pouring begins (Right Time) and poured directly into the foundation forms (Right Place). Delivering it 4 hours early means it hardens in the truck. Delivering it to the wrong side of the city renders it useless."
        },
        {
          "name": "Right Source",
          "definition": "A supplier who is reliable, financially stable, capable, and ethical.",
          "detailed_explanation": "The source determines the reliability of the other four rights. A good source has the technology to make the product, the capacity to meet demand, financial health to stay in business, and a location that allows for feasible logistics.",
          "consequences_of_failure": "Choosing the wrong source can lead to legal issues (if they use child labor), supply interruptions (if they go bankrupt), or quality failures (if they lack technical expertise).",
          "practical_example": "A clothing brand choosing a factory. Supplier X is cheap but has a history of labor strikes and fires. Supplier Y is slightly more expensive but has modern safety equipment and a happy workforce. Supplier Y is the 'Right Source' because they guarantee continuity of supply and protect the brand's reputation."
        }
      ]
    },
    {
      "id": "concept_03",
      "topic": "Specifications in Materials Management",
      "introduction": "The specification is the 'Blueprint' of purchasing. It is a detailed description of the requirements for materials, products, or services. It is the primary communication tool between the buyer and the seller.",
      "objectives_of_specifications": [
        "To define exactly WHAT to buy in unambiguous terms.",
        "To communicate requirements clearly to the supplier.",
        "To establish a legal standard for inspection and quality control upon receipt.",
        "To facilitate standardization (reducing variety and cost).",
        "To enable fair vendor evaluation (comparing apples to apples)."
      ],
      "methods_of_description": [
        {
          "method_type": "1. Description by Brand",
          "summary": "Requesting an item by its proprietary trade name.",
          "usage_context": [
            "When the item is patented or the manufacturing process is a secret.",
            "When the supplier has a superior reputation/integrity.",
            "When the quantity is too small to justify writing a custom spec.",
            "When the end-customer specifically prefers that brand (e.g., 'Intel Inside')."
          ],
          "pros": [
            "Simplest method.",
            "Guarantees a known quality standard based on reputation.",
            "Saves time for the buyer."
          ],
          "cons": [
            "Most expensive (paying for the brand name).",
            "Eliminates competition (Sole Sourcing).",
            "Makes the buyer dependent on one supplier."
          ],
          "example": "A doctor prescribing 'Tylenol' instead of 'Acetaminophen'. The doctor relies on the brand reputation of Tylenol for safety and consistency."
        },
        {
          "method_type": "2. Description by Specification (Physical/Chemical)",
          "summary": "Defining the detailed physical dimensions, chemical composition, or material properties.",
          "usage_context": [
            "Used for raw materials (steel, oil, chemicals).",
            "Used for generic pharmaceuticals.",
            "Used when multiple suppliers can produce the same standard item."
          ],
          "pros": [
            "Encourages competition (multiple vendors can bid).",
            "Usually results in a lower price than branded items.",
            "Allows the buyer to get exactly what they need without extras."
          ],
          "cons": [
            "Expensive and time-consuming to write the spec.",
            "Buyer takes the risk: if the spec is met but the product fails, it's the buyer's fault for writing a bad spec.",
            "Requires rigid inspection."
          ],
          "example": "A construction firm ordering 'Portland Cement, Type 1, complying with ASTM C150 standards' rather than asking for a specific brand of cement."
        },
        {
          "method_type": "3. Description by Engineering Drawings",
          "summary": "Using technical blueprints, CAD models, and diagrams to describe the item.",
          "usage_context": [
            "Essential for construction, machining, and casting.",
            "Used when items have complex shapes, tight tolerances, or need to fit into a specific assembly.",
            "Used when no standard existing product meets the need."
          ],
          "pros": [
            "Most accurate way to describe dimensions and assembly.",
            "Provides a visual reference for inspection.",
            "Universal language for engineers."
          ],
          "cons": [
            "Very expensive to produce (requires skilled engineers).",
            "Can be difficult for non-technical purchasing staff to interpret."
          ],
          "example": "An automotive company sending a CAD file of a car door handle to a plastics manufacturer. The drawing specifies the exact curve, screw hole locations, and surface finish."
        },
        {
          "method_type": "4. Miscellaneous / Market Grades / Samples",
          "summary": "Catch-all category including 'Market Grades', 'Samples', or 'Just like the last one'.",
          "usage_context": [
            "Market Grades: Used for commodities (wheat, cotton, lumber) graded by government/industry standards.",
            "Samples: Used when appearance, color, or texture is hard to describe in words (e.g., fabric, paint).",
            "Performance Specs: Describing what the product must DO, rather than what it is made of."
          ],
          "pros": [
            "Market Grades make buying commodities easy and standard.",
            "Samples eliminate confusion regarding aesthetics."
          ],
          "cons": [
            "Samples may degrade over time.",
            "'Just like the last one' is lazy purchasing and can perpetuate previous mistakes."
          ],
          "example": "Buying 'Grade A Large Eggs'. The buyer doesn't need to measure every egg; the industry standard 'Grade A' defines the size and quality automatically."
        }
      ]
    },
    {
      "id": "study_guide_tips",
      "tips_for_students": [
        "Memorize the distinction: Purchasing = Transactional; Procurement = Strategic.",
        "For the 5 Rights, remember the acronym QQPT-S (Quality, Quantity, Price, Time, Source).",
        "In exam questions about Specifications, look for keywords like 'Patented' (Brand), 'Commodity' (Market Grade), or 'Complex Assembly' (Drawings) to choose the right method."
      ]
    }
  ]
};

export const SECTION_3_2_DATA: Chapter32Data = {
  "module_metadata": {
    "course_code": "PROC-301",
    "chapter_number": 3,
    "section_number": "3.2",
    "section_title": "Objectives of Good Purchasing",
    "last_updated": "2025-12-29",
    "learning_outcome": "Students will be able to articulate the strategic goals of a purchasing department beyond simple buying, understanding how these objectives integrate with general management goals to ensure organizational profitability and stability.",
    "source_reference": "Chapter 3 Slides, Pages 37-41"
  },
  "core_concepts": [
    {
      "id": "OBJ_001",
      "title": "Ensure Uninterrupted Flow of Materials and Services",
      "category": "Operational Stability",
      "priority_level": "Critical / High",
      "definition": "The primary duty of purchasing is to ensure that the production line never stops due to a lack of raw materials, components, or necessary services.",
      "comprehensive_analysis": [
        "This is the most fundamental objective. If materials are not available, the entire operation halts.",
        "It involves balancing the timing of delivery with the rate of consumption.",
        "In a manufacturing context, the cost of 'downtime' often far exceeds the cost of the materials themselves. A missing $1 bolt can stop a $10 million assembly line.",
        "This objective requires close coordination with production planning to understand schedules and with logistics to mitigate transit risks."
      ],
      "key_performance_indicators": [
        "Stock-out frequency (Number of times items were unavailable)",
        "Production downtime hours caused by material shortage",
        "Supplier On-Time Delivery (OTD) rates",
        "Lead time variability"
      ],
      "risk_factors": [
        "Operational Stoppage: Idle labor and machinery costs.",
        "Customer Dissatisfaction: Late deliveries to the final customer leading to loss of goodwill.",
        "Rush Shipping Costs: Paying premium expedited freight charges to fix shortages."
      ],
      "case_study": {
        "scenario_title": "The Automotive Assembly Stoppage",
        "situation": "An automotive plant produces 500 cars a day. The purchasing manager tries to save money by switching to a cheaper, distant supplier for brake pads.",
        "conflict": "A storm delays the shipment by 48 hours. The factory has no safety stock.",
        "outcome": "The entire assembly line stops. Workers are paid to stand idle. The company loses $50,000 per hour in potential revenue. The 'saving' on the brake pads is completely wiped out by the downtime costs.",
        "lesson": "Reliability of supply (uninterrupted flow) is often more valuable than the lowest unit price."
      }
    },
    {
      "id": "OBJ_002",
      "title": "Buying Competitively and Prudently",
      "category": "Financial Efficiency",
      "priority_level": "High",
      "definition": "Securing materials at the best possible economic value relative to market forces (Competitively) while ensuring the purchase makes logical business sense (Prudently).",
      "sub_concepts": [
        {
          "term": "Buying Competitively",
          "explanation": "This means keeping abreast of supply and demand forces that regulate prices. A buyer must ensure they are not paying more than their competitors for the same material. If Competitor A buys steel at $100/ton and you buy it at $110/ton, your final product will be less profitable.",
          "tactics": [
            "Market research and price indexing.",
            "Competitive bidding (RFQs).",
            "Negotiation based on volume."
          ]
        },
        {
          "term": "Buying Prudently",
          "explanation": "This involves a constant search for the 'best mix' of price, quality, and service. It means avoiding 'over-specifying' (buying a Ferrari when a Toyota will do) and 'under-specifying' (buying a product that breaks immediately). It is about Value Analysis.",
          "tactics": [
            "Total Cost of Ownership (TCO) analysis.",
            "Value Engineering.",
            "Substituting costly materials for cheaper, effective alternatives."
          ]
        }
      ],
      "economic_implication": "Every dollar saved in purchasing contributes directly to the bottom-line profit (Profit Leverage Effect). It is often easier to increase profit by reducing purchasing costs than by increasing sales volume.",
      "risk_factors": [
        "Paying 'Market Premium': Losing competitive edge by failing to negotiate.",
        "False Economy: Buying a cheap item that fails, leading to higher replacement costs (imprudent buying)."
      ],
      "case_study": {
        "scenario_title": "The Prudent Packaging Decision",
        "situation": "A beverage company uses high-grade, expensive cardboard for shipping crates. The boxes are thrown away immediately by retailers.",
        "action": "The purchasing manager realizes this is not 'Prudent'. They switch to a lighter, recycled cardboard that is 30% cheaper but still holds the weight.",
        "outcome": "The function (holding bottles) is maintained, but the cost is reduced. This is prudent buying—paying only for the necessary value."
      }
    },
    {
      "id": "OBJ_003",
      "title": "Minimizing Inventory Investment",
      "category": "Asset Management",
      "priority_level": "Medium-High",
      "definition": "Keeping the stock of materials at the lowest possible level consistent with safety and production requirements to free up working capital.",
      "comprehensive_analysis": [
        "Inventory is 'idle capital'. Money tied up in a warehouse cannot be used for R&D, marketing, or salaries.",
        "High inventory levels hide inefficiencies (the 'river and rocks' analogy).",
        "Purchasing must balance the 'fear of running out' (which drives high inventory) with the 'finance department's desire for cash flow' (which drives low inventory).",
        "This objective directly conflicts with 'Uninterrupted Flow' if not managed carefully via JIT or accurate forecasting."
      ],
      "cost_drivers_of_inventory": [
        "Capital Cost: Interest paid on money borrowed to buy stock.",
        "Storage Cost: Rent, electricity, and warehouse staffing.",
        "Obsolescence: Goods going out of fashion or technology changing.",
        "Deterioration: Perishable goods spoiling over time.",
        "Theft/Shrinkage: Loss of inventory due to stealing or damage."
      ],
      "strategies": [
        "Just-In-Time (JIT) delivery.",
        "Vendor Managed Inventory (VMI).",
        "Frequent ordering of smaller batches."
      ],
      "case_study": {
        "scenario_title": "The Electronics Obsolescence",
        "situation": "A computer manufacturer buys 10,000 processors to get a bulk discount.",
        "conflict": "Two months later, a faster processor is released. The inventory of 10,000 old processors loses 50% of its value instantly.",
        "outcome": "The 'savings' from the bulk buy were lost to obsolescence. The objective of minimizing inventory investment was failed."
      }
    },
    {
      "id": "OBJ_004",
      "title": "Developing Reliable Alternative Sources",
      "category": "Risk Mitigation",
      "priority_level": "Strategic",
      "definition": "Identifying and qualifying multiple suppliers for key categories to avoid dependency and ensure supply security.",
      "strategic_rationale": [
        "Dependency on a single supplier creates a 'Single Point of Failure'.",
        "If a sole supplier faces a strike, fire, bankruptcy, or capacity shortage, the buyer is helpless.",
        "Alternative sources create competition. When suppliers know they have competitors, they remain sharp on price and service.",
        "It provides flexibility to handle sudden surges in demand that one supplier cannot meet."
      ],
      "implementation_steps": [
        "1. Market Survey: Identify potential vendors.",
        "2. Pre-qualification: Audit their financials and capacity.",
        "3. Split Orders: Give 70% to the main supplier and 30% to the backup to keep them engaged.",
        "4. Relationship Management: Treat backup suppliers fairly so they are ready when needed."
      ],
      "risk_factors": [
        "Supply Disruption: Total halt in production if the sole source fails.",
        "Price Monopoly: The sole supplier dictates price increases."
      ],
      "case_study": {
        "scenario_title": "The Single Source Strike",
        "situation": "A clothing retailer bought all their zippers from one factory in Asia.",
        "conflict": "The factory workers went on strike for 3 weeks.",
        "outcome": "The retailer had thousands of finished pants without zippers. They could not sell the product. If they had developed a secondary source in another region, they could have shifted production."
      }
    },
    {
      "id": "OBJ_005",
      "title": "Integration with Other Departments",
      "category": "Organizational Alignment",
      "priority_level": "Strategic",
      "definition": "Purchasing acts as a bridge, translating the requirements of internal departments (Design, Production, Finance) into supplier actions, and bringing market intelligence back into the firm.",
      "integration_points": [
        {
          "department": "Design / Engineering",
          "interaction": "Purchasing provides input on standard materials to avoid expensive custom specs. They bring supplier innovation into the design phase (Early Supplier Involvement - ESI).",
          "goal": "Design for Manufacturability and Cost."
        },
        {
          "department": "Finance / Accounting",
          "interaction": "Purchasing provides forecasts of future prices for budgeting. They ensure invoices match POs to streamline accounts payable.",
          "goal": "Accurate budgeting and cash flow management."
        },
        {
          "department": "Production / Operations",
          "interaction": "Purchasing ensures materials arrive to match the production schedule. They communicate lead times to production planners.",
          "goal": "Smooth operational workflow."
        },
        {
          "department": "Marketing",
          "interaction": "Purchasing informs marketing about material availability or price hikes that might affect final product pricing.",
          "goal": "Realistic sales promises."
        }
      ],
      "knowledge_repository_role": "Purchasing serves as the 'eyes and ears' of the company in the marketplace. They gather intelligence on: New materials, New processes, Price trends, and Competitor activities.",
      "case_study": {
        "scenario_title": "The Disconnected Design",
        "situation": "Engineers design a new gadget using a specific rare metal without consulting purchasing.",
        "conflict": "Purchasing discovers this metal has a 6-month lead time and is mined in a conflict zone.",
        "outcome": "The product launch is delayed by months. If Integration had happened early, purchasing could have suggested a readily available alternative metal."
      }
    },
    {
      "id": "OBJ_006",
      "title": "Developing Good Vendor Relationships",
      "category": "Strategic Partnership",
      "priority_level": "Long-term",
      "definition": "Moving from adversarial 'win-lose' negotiations to collaborative 'win-win' partnerships.",
      "benefits": [
        "Suppliers are more likely to help in emergencies (rush orders).",
        "Suppliers share proprietary technology and cost-saving ideas.",
        "Problems are solved faster through mutual trust.",
        "Reduced administrative costs due to smoother transactions."
      ],
      "quote": "Good supplier relationships are invaluable. Under such relationships, the problems that arise between the buyer and the seller are readily solved."
    },
    {
      "id": "OBJ_007",
      "title": "Developing Personnel and Procedures",
      "category": "Internal Management",
      "priority_level": "Foundational",
      "definition": "Building a competent team and efficient systems to execute the purchasing function.",
      "components": [
        "Training: Developing highly competent personnel who act ethically and professionally.",
        "Talent Reserve: Purchasing staff gain broad business views and often become future executives.",
        "Policy Formulation: Creating clear rules (Standard Operating Procedures) to ensure consistency and prevent fraud.",
        "Low Operating Cost: Achieving all objectives with the minimum administrative expense."
      ]
    }
  ],
  "interactive_quiz_data": [
    {
      "question": "Which objective conflicts most directly with 'Minimizing Inventory Investment'?",
      "options": [
        "Buying Prudently",
        "Uninterrupted Flow of Materials",
        "Integration with Design",
        "Developing Personnel"
      ],
      "correct_answer": "Uninterrupted Flow of Materials",
      "explanation": "To guarantee 100% uninterrupted flow, a company might want to hold huge safety stocks. However, this violates the objective of minimizing inventory investment. Good purchasing finds the balance."
    },
    {
      "question": "Buying a high-quality machine that is far superior to what is actually needed for the job is a violation of which objective?",
      "options": [
        "Uninterrupted Flow",
        "Buying Competitively",
        "Buying Prudently",
        "Developing Alternative Sources"
      ],
      "correct_answer": "Buying Prudently",
      "explanation": "Buying prudently means finding the best mix. Buying 'too much quality' (gold-plating) is wasteful and therefore not prudent."
    }
  ]
}

export const PURCHASING_CYCLE = [
  "Need Recognition",
  "Spec / Requisition",
  "Make-or-Buy Decision",
  "Sourcing / Quotation",
  "Evaluation / Selection",
  "Price Determination",
  "PO Issuance",
  "Follow-up / Expediting",
  "Receipt / Inspection",
  "Invoice Approval / Payment",
  "Record Keeping"
];