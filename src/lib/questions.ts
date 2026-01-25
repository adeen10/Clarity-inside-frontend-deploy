export type QuestionType = 'score' | 'choice';

export interface Question {
    id: number;
    text: string;
    options: string[];
    type: QuestionType;
    section: string;
}

export const SECTIONS = {
    GAD7: 'GAD-7 Assessment',
    PHYSICAL: 'Physical Symptoms',
    COGNITIVE: 'Cognitive Patterns',
    BEHAVIOURAL: 'Behavioural Style',
    IMPACT: 'Life Impact & Triggers',

    // ADHD Sections
    ADHD_SCREENER: 'ADHD Likelihood Screener',
    ADHD_INATTENTION: 'Inattention',
    ADHD_EXECUTIVE: 'Executive Dysfunction',
    ADHD_HYPERACTIVITY: 'Hyperactivity',
    ADHD_IMPULSIVITY: 'Impulsivity',
    ADHD_EMOTIONAL: 'Emotional Regulation',
    ADHD_LIFESTYLE: 'Lifestyle Impact',
    ADHD_COPING: 'Coping & Compensation',

    // Autism Sections
    AUTISM_SCREENER: 'Autism Traits Screener',
    AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY: 'Social Communication & Reciprocity',
    AUTISM_MASKING_SOCIAL_COMPENSATION: 'Masking & Social Compensation',
    AUTISM_COGNITIVE_RIGIDITY_BLACK_WHITE_THINKING: 'Cognitive Rigidity & Black-and-White Thinking',
    AUTISM_PREFERENCE_FOR_ROUTINE_PREDICTABILITY: 'Preference for Routine & Predictability',
    AUTISM_INTENSE_INTERESTS_REPETITIVE_BEHAVIOR: 'Intense Interests & Repetitive Behavior',
    AUTISM_SENSORY_SENSITIVITIES: 'Sensory Sensitivities',
    AUTISM_EMOTIONAL_REGULATION_EMPATHY: 'Emotional Regulation & Empathy',
    AUTISM_LIFE_IMPACT_BURNOUT: 'Life Impact & Burnout',


};

const ADHD_OPTIONS = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];
const AUTISM_OPTIONS = ["Never", "Rarely", "Sometimes", "Often", "Always"];


export const AUTISM_QUESTIONS: Question[] = [
    // Part 1: Autism Traits Screener (15 questions)
    { id: 1, section: SECTIONS.AUTISM_SCREENER, text: "I struggle with small talk and casual conversation in social situations.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 2, section: SECTIONS.AUTISM_SCREENER, text: "Making or maintaining friendships does not come naturally to me.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 3, section: SECTIONS.AUTISM_SCREENER, text: "I prefer being alone or with a small group rather than large social gatherings.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 4, section: SECTIONS.AUTISM_SCREENER, text: "Eye contact feels uncomfortable or unnatural for me.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 5, section: SECTIONS.AUTISM_SCREENER, text: "I sometimes talk at length about my interests without noticing others’ reactions.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 6, section: SECTIONS.AUTISM_SCREENER, text: "I rehearse what to say or copy others’ behavior to blend in socially.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 7, section: SECTIONS.AUTISM_SCREENER, text: "Unexpected changes to my routine cause me significant distress.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 8, section: SECTIONS.AUTISM_SCREENER, text: "I become so absorbed in interests that I lose track of time or other tasks.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 9, section: SECTIONS.AUTISM_SCREENER, text: "I am more sensitive to noise, light, or textures than most people.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 10, section: SECTIONS.AUTISM_SCREENER, text: "I struggle to tell what others are feeling unless they say it directly.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 11, section: SECTIONS.AUTISM_SCREENER, text: "When overwhelmed, I need to withdraw to calm down or reset.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 12, section: SECTIONS.AUTISM_SCREENER, text: "I tend to think in black-and-white terms and dislike ambiguity.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 13, section: SECTIONS.AUTISM_SCREENER, text: "I often miss jokes, sarcasm, or indirect language.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 14, section: SECTIONS.AUTISM_SCREENER, text: "I have offended people by being too direct or honest without realizing it.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 15, section: SECTIONS.AUTISM_SCREENER, text: "I often feel different or out of place, even when trying to fit in.", options: AUTISM_OPTIONS, type: 'score' },

    // Part 2: Detailed Trait Profile (35 questions)
    // Social Communication & Reciprocity (5 questions)
    { id: 16, section: SECTIONS.AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY, text: "Unspoken social rules often confuse me.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 17, section: SECTIONS.AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY, text: "I struggle to read body language or tone of voice.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 18, section: SECTIONS.AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY, text: "Group conversations are hard for me to follow or join naturally.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 19, section: SECTIONS.AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY, text: "I care about others’ feelings but often don’t know how to respond.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 20, section: SECTIONS.AUTISM_SOCIAL_COMMUNICATION_RECIPROCITY, text: "I communicate very directly and struggle to adjust my style to different situations.", options: AUTISM_OPTIONS, type: 'score' },

    // Masking & Social Compensation (4 questions)
    { id: 21, section: SECTIONS.AUTISM_MASKING_SOCIAL_COMPENSATION, text: "Social situations feel like a performance rather than being myself.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 22, section: SECTIONS.AUTISM_MASKING_SOCIAL_COMPENSATION, text: "I copy others’ expressions or behaviors to fit in socially.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 23, section: SECTIONS.AUTISM_MASKING_SOCIAL_COMPENSATION, text: "I consciously monitor my expressions, tone, or movements around others.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 24, section: SECTIONS.AUTISM_MASKING_SOCIAL_COMPENSATION, text: "I suppress natural behaviors because I worry they will seem odd.", options: AUTISM_OPTIONS, type: 'score' },

    // Cognitive Rigidity & Black-and-White Thinking (4 questions)
    { id: 25, section: SECTIONS.AUTISM_COGNITIVE_RIGIDITY_BLACK_WHITE_THINKING, text: "I find it hard to switch tasks once I’m focused.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 26, section: SECTIONS.AUTISM_COGNITIVE_RIGIDITY_BLACK_WHITE_THINKING, text: "I prefer doing things a specific way and feel frustrated when I can’t.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 27, section: SECTIONS.AUTISM_COGNITIVE_RIGIDITY_BLACK_WHITE_THINKING, text: "I have strong opinions and struggle with compromise or gray areas.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 28, section: SECTIONS.AUTISM_COGNITIVE_RIGIDITY_BLACK_WHITE_THINKING, text: "Broken rules or sudden plan changes cause me significant stress.", options: AUTISM_OPTIONS, type: 'score' },

    // Preference for Routine & Predictability (4 questions)
    { id: 29, section: SECTIONS.AUTISM_PREFERENCE_FOR_ROUTINE_PREDICTABILITY, text: "Disruptions to my daily routine leave me feeling unsettled.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 30, section: SECTIONS.AUTISM_PREFERENCE_FOR_ROUTINE_PREDICTABILITY, text: "I prefer knowing plans in advance rather than being spontaneous.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 31, section: SECTIONS.AUTISM_PREFERENCE_FOR_ROUTINE_PREDICTABILITY, text: "I find comfort in familiarity and often repeat foods, shows, or places.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 32, section: SECTIONS.AUTISM_PREFERENCE_FOR_ROUTINE_PREDICTABILITY, text: "Even small unexpected changes can throw me off emotionally.", options: AUTISM_OPTIONS, type: 'score' },

    // Intense Interests & Repetitive Behavior (4 questions)
    { id: 33, section: SECTIONS.AUTISM_INTENSE_INTERESTS_REPETITIVE_BEHAVIOR, text: "I develop intense interests that I dive into deeply.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 34, section: SECTIONS.AUTISM_INTENSE_INTERESTS_REPETITIVE_BEHAVIOR, text: "I struggle to disengage from interests once I’m focused on them.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 35, section: SECTIONS.AUTISM_INTENSE_INTERESTS_REPETITIVE_BEHAVIOR, text: "I use repetitive movements or fidgeting to calm or regulate myself.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 36, section: SECTIONS.AUTISM_INTENSE_INTERESTS_REPETITIVE_BEHAVIOR, text: "I rely on small rituals or habits to feel comfortable.", options: AUTISM_OPTIONS, type: 'score' },

    // Sensory Sensitivities (4 questions)
    { id: 37, section: SECTIONS.AUTISM_SENSORY_SENSITIVITIES, text: "Loud noises feel overwhelming or painful to me.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 38, section: SECTIONS.AUTISM_SENSORY_SENSITIVITIES, text: "Bright or flickering lights make me uncomfortable or unwell.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 39, section: SECTIONS.AUTISM_SENSORY_SENSITIVITIES, text: "Certain textures or physical sensations are hard for me to tolerate.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 40, section: SECTIONS.AUTISM_SENSORY_SENSITIVITIES, text: "Busy, crowded environments overwhelm me quickly.", options: AUTISM_OPTIONS, type: 'score' },

    // Emotional Regulation & Empathy (5 questions)
    { id: 41, section: SECTIONS.AUTISM_EMOTIONAL_REGULATION_EMPATHY, text: "My emotional reactions can feel intense or hard to control.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 42, section: SECTIONS.AUTISM_EMOTIONAL_REGULATION_EMPATHY, text: "In overwhelming situations, I shut down or have emotional meltdowns.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 43, section: SECTIONS.AUTISM_EMOTIONAL_REGULATION_EMPATHY, text: "It takes me a long time to recover after being upset.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 44, section: SECTIONS.AUTISM_EMOTIONAL_REGULATION_EMPATHY, text: "I don’t always realize when I’ve upset someone.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 45, section: SECTIONS.AUTISM_EMOTIONAL_REGULATION_EMPATHY, text: "I care about others but often don’t know how to comfort them.", options: AUTISM_OPTIONS, type: 'score' },

    // Life Impact & Burnout (5 questions)
    { id: 46, section: SECTIONS.AUTISM_LIFE_IMPACT_BURNOUT, text: "Daily life exhausts me more than it seems to exhaust others.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 47, section: SECTIONS.AUTISM_LIFE_IMPACT_BURNOUT, text: "I need significant alone time to recover after social or work demands.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 48, section: SECTIONS.AUTISM_LIFE_IMPACT_BURNOUT, text: "I have experienced periods of burnout where I could not function well.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 49, section: SECTIONS.AUTISM_LIFE_IMPACT_BURNOUT, text: "Pretending to be “normal” uses most of my energy.", options: AUTISM_OPTIONS, type: 'score' },
    { id: 50, section: SECTIONS.AUTISM_LIFE_IMPACT_BURNOUT, text: "My traits have shaped my life choices to avoid overwhelm or failure.", options: AUTISM_OPTIONS, type: 'score' },
];

export const ADHD_QUESTIONS: Question[] = [
    // PART 1 — ADHD LIKELIHOOD SCREENER (1-12)
    { id: 1, section: SECTIONS.ADHD_SCREENER, text: "Do you struggle to stay focused on tasks that require sustained mental effort?", options: ADHD_OPTIONS, type: 'score' },
    { id: 2, section: SECTIONS.ADHD_SCREENER, text: "Do you find your attention drifting even when you are trying to concentrate?", options: ADHD_OPTIONS, type: 'score' },
    { id: 3, section: SECTIONS.ADHD_SCREENER, text: "Do you often start tasks but lose interest before finishing them?", options: ADHD_OPTIONS, type: 'score' },
    { id: 4, section: SECTIONS.ADHD_SCREENER, text: "Do you avoid or delay tasks that feel boring, repetitive, or mentally demanding?", options: ADHD_OPTIONS, type: 'score' },
    { id: 5, section: SECTIONS.ADHD_SCREENER, text: "Do you find it hard to organise tasks or activities in daily life?", options: ADHD_OPTIONS, type: 'score' },
    { id: 6, section: SECTIONS.ADHD_SCREENER, text: "Do you feel mentally scattered or overwhelmed by simple responsibilities?", options: ADHD_OPTIONS, type: 'score' },
    { id: 7, section: SECTIONS.ADHD_SCREENER, text: "Do you underestimate how long tasks will take to complete?", options: ADHD_OPTIONS, type: 'score' },
    { id: 8, section: SECTIONS.ADHD_SCREENER, text: "Do deadlines frequently catch you off guard?", options: ADHD_OPTIONS, type: 'score' },
    { id: 9, section: SECTIONS.ADHD_SCREENER, text: "Do you misplace important items such as keys, phone, or documents?", options: ADHD_OPTIONS, type: 'score' },
    { id: 10, section: SECTIONS.ADHD_SCREENER, text: "Do you feel restless or internally “on edge” when expected to sit still?", options: ADHD_OPTIONS, type: 'score' },
    { id: 11, section: SECTIONS.ADHD_SCREENER, text: "Do you interrupt others or speak before fully thinking things through?", options: ADHD_OPTIONS, type: 'score' },
    { id: 12, section: SECTIONS.ADHD_SCREENER, text: "Do these patterns feel persistent rather than situational or occasional?", options: ADHD_OPTIONS, type: 'score' },

    // PART 2 — CORE SYMPTOM GROUPS
    // A. INATTENTION (13-16)
    { id: 13, section: SECTIONS.ADHD_INATTENTION, text: "Do you struggle to maintain focus during conversations or meetings?", options: ADHD_OPTIONS, type: 'score' },
    { id: 14, section: SECTIONS.ADHD_INATTENTION, text: "Do you miss details or make careless mistakes, even on familiar tasks?", options: ADHD_OPTIONS, type: 'score' },
    { id: 15, section: SECTIONS.ADHD_INATTENTION, text: "Do you find it difficult to follow through on instructions unless they are written down?", options: ADHD_OPTIONS, type: 'score' },
    { id: 16, section: SECTIONS.ADHD_INATTENTION, text: "Does your attention fluctuate depending on interest rather than importance?", options: ADHD_OPTIONS, type: 'score' },

    // B. EXECUTIVE DYSFUNCTION (17-24)
    { id: 17, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you struggle to prioritise tasks when you have multiple responsibilities?", options: ADHD_OPTIONS, type: 'score' },
    { id: 18, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you feel mentally blocked when trying to start tasks, even simple ones?", options: ADHD_OPTIONS, type: 'score' },
    { id: 19, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you rely heavily on last-minute pressure to complete tasks?", options: ADHD_OPTIONS, type: 'score' },
    { id: 20, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you struggle to break large tasks into manageable steps?", options: ADHD_OPTIONS, type: 'score' },
    { id: 21, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you forget appointments, deadlines, or commitments unless reminded?", options: ADHD_OPTIONS, type: 'score' },
    { id: 22, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you feel overwhelmed by planning, even when tasks are not complex?", options: ADHD_OPTIONS, type: 'score' },
    { id: 23, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you struggle to maintain consistent routines?", options: ADHD_OPTIONS, type: 'score' },
    { id: 24, section: SECTIONS.ADHD_EXECUTIVE, text: "Do you experience mental fatigue from managing everyday responsibilities?", options: ADHD_OPTIONS, type: 'score' },

    // C. HYPERACTIVITY (25-28)
    { id: 25, section: SECTIONS.ADHD_HYPERACTIVITY, text: "Do you feel internally restless even when physically still?", options: ADHD_OPTIONS, type: 'score' },
    { id: 26, section: SECTIONS.ADHD_HYPERACTIVITY, text: "Do you find it hard to relax without needing stimulation or activity?", options: ADHD_OPTIONS, type: 'score' },
    { id: 27, section: SECTIONS.ADHD_HYPERACTIVITY, text: "Do you fidget, move, or shift position frequently?", options: ADHD_OPTIONS, type: 'score' },
    { id: 28, section: SECTIONS.ADHD_HYPERACTIVITY, text: "Do you feel uncomfortable during quiet or low-stimulation situations?", options: ADHD_OPTIONS, type: 'score' },

    // D. IMPULSIVITY (29-32)
    { id: 29, section: SECTIONS.ADHD_IMPULSIVITY, text: "Do you act on impulses and reflect later?", options: ADHD_OPTIONS, type: 'score' },
    { id: 30, section: SECTIONS.ADHD_IMPULSIVITY, text: "Do you make quick decisions without fully considering consequences?", options: ADHD_OPTIONS, type: 'score' },
    { id: 31, section: SECTIONS.ADHD_IMPULSIVITY, text: "Do you interrupt conversations or finish others’ sentences?", options: ADHD_OPTIONS, type: 'score' },
    { id: 32, section: SECTIONS.ADHD_IMPULSIVITY, text: "Do you struggle to pause before reacting emotionally or verbally?", options: ADHD_OPTIONS, type: 'score' },

    // PART 3
    // E. EMOTIONAL REGULATION (33-38)
    { id: 33, section: SECTIONS.ADHD_EMOTIONAL, text: "Do you experience emotions more intensely than others seem to?", options: ADHD_OPTIONS, type: 'score' },
    { id: 34, section: SECTIONS.ADHD_EMOTIONAL, text: "Do small frustrations trigger strong emotional reactions?", options: ADHD_OPTIONS, type: 'score' },
    { id: 35, section: SECTIONS.ADHD_EMOTIONAL, text: "Do you struggle to calm down once emotionally activated?", options: ADHD_OPTIONS, type: 'score' },
    { id: 36, section: SECTIONS.ADHD_EMOTIONAL, text: "Do you feel emotionally exhausted after managing daily demands?", options: ADHD_OPTIONS, type: 'score' },
    { id: 37, section: SECTIONS.ADHD_EMOTIONAL, text: "Do mood shifts feel sudden or difficult to control?", options: ADHD_OPTIONS, type: 'score' },
    { id: 38, section: SECTIONS.ADHD_EMOTIONAL, text: "Do emotions interfere with focus or decision-making?", options: ADHD_OPTIONS, type: 'score' },

    // F. LIFESTYLE IMPACT (39-43)
    { id: 39, section: SECTIONS.ADHD_LIFESTYLE, text: "Do attention or organisation difficulties affect your work or studies?", options: ADHD_OPTIONS, type: 'score' },
    { id: 40, section: SECTIONS.ADHD_LIFESTYLE, text: "Do these challenges impact your relationships or communication?", options: ADHD_OPTIONS, type: 'score' },
    { id: 41, section: SECTIONS.ADHD_LIFESTYLE, text: "Do you feel capable of more than your current output reflects?", options: ADHD_OPTIONS, type: 'score' },
    { id: 42, section: SECTIONS.ADHD_LIFESTYLE, text: "Do you feel mentally drained from “holding everything together”?", options: ADHD_OPTIONS, type: 'score' },
    { id: 43, section: SECTIONS.ADHD_LIFESTYLE, text: "Do these patterns affect your confidence or self-perception?", options: ADHD_OPTIONS, type: 'score' },

    // G. COPING & COMPENSATION (44-50)
    { id: 44, section: SECTIONS.ADHD_COPING, text: "Do you rely on reminders, alarms, or lists to function day to day?", options: ADHD_OPTIONS, type: 'score' },
    { id: 45, section: SECTIONS.ADHD_COPING, text: "Do you over-prepare to avoid forgetting or falling behind?", options: ADHD_OPTIONS, type: 'score' },
    { id: 46, section: SECTIONS.ADHD_COPING, text: "Do you mask difficulties to appear organised or capable to others?", options: ADHD_OPTIONS, type: 'score' },
    { id: 47, section: SECTIONS.ADHD_COPING, text: "Do you push yourself harder than others to maintain performance?", options: ADHD_OPTIONS, type: 'score' },
    { id: 48, section: SECTIONS.ADHD_COPING, text: "Do you use last-minute urgency as a coping mechanism?", options: ADHD_OPTIONS, type: 'score' },
    { id: 49, section: SECTIONS.ADHD_COPING, text: "Do you feel mentally exhausted despite appearing “on top of things”?", options: ADHD_OPTIONS, type: 'score' },
    { id: 50, section: SECTIONS.ADHD_COPING, text: "Do you worry about burnout from sustaining these coping strategies?", options: ADHD_OPTIONS, type: 'score' },
];

export const QUESTIONS: Question[] = [
    // SECTION 1: GAD-7
    {
        id: 1,
        section: SECTIONS.GAD7,
        text: "Feeling nervous, anxious, or on edge?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 2,
        section: SECTIONS.GAD7,
        text: "Not being able to stop or control worrying?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 3,
        section: SECTIONS.GAD7,
        text: "Worrying too much about different things?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 4,
        section: SECTIONS.GAD7,
        text: "Trouble relaxing?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 5,
        section: SECTIONS.GAD7,
        text: "Being so restless that it is hard to sit still?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 6,
        section: SECTIONS.GAD7,
        text: "Becoming easily annoyed or irritable?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },
    {
        id: 7,
        section: SECTIONS.GAD7,
        text: "Feeling afraid, as if something awful might happen?",
        options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        type: 'score'
    },

    // SECTION 2: PHYSICAL SYMPTOMS
    {
        id: 8,
        section: SECTIONS.PHYSICAL,
        text: "How often do you experience physical tension (shoulders, jaw, stomach) without a clear reason?",
        options: ["Never", "Occasionally", "Frequently", "Almost daily"],
        type: 'score'
    },
    {
        id: 9,
        section: SECTIONS.PHYSICAL,
        text: "When anxious, how strong are your physical sensations (heart racing, tight chest, shaky hands)?",
        options: ["Mild", "Noticeable but manageable", "Strong and uncomfortable", "Overwhelming"],
        type: 'score'
    },
    {
        id: 10,
        section: SECTIONS.PHYSICAL,
        text: "How often does anxiety affect your sleep?",
        options: ["Rarely", "A few nights a month", "A few nights a week", "Most nights"],
        type: 'score'
    },
    {
        id: 11,
        section: SECTIONS.PHYSICAL,
        text: "Do you experience digestive issues (nausea, stomach ache) during stressful periods?",
        options: ["Never", "Occasionally", "Frequently", "Very often"],
        type: 'score'
    },
    {
        id: 12,
        section: SECTIONS.PHYSICAL,
        text: "How quickly does your body react when you feel stressed?",
        options: ["Slowly / not much change", "Some physical reaction", "Reacts quickly and noticeably", "Immediate and intense"],
        type: 'score'
    },

    // COGNITIVE PATTERNS
    {
        id: 13,
        section: SECTIONS.COGNITIVE,
        text: "How often do you find yourself imagining worst-case scenarios?",
        options: ["Rarely", "Sometimes", "Often", "Almost always"],
        type: 'score'
    },
    {
        id: 14,
        section: SECTIONS.COGNITIVE,
        text: "Do you struggle to “switch off” your thoughts even when tired?",
        options: ["No", "Occasionally", "Frequently", "Nearly always"],
        type: 'score'
    },
    {
        id: 15,
        section: SECTIONS.COGNITIVE,
        text: "How often do you worry about things you logically know are unlikely to happen?",
        options: ["Rarely", "Sometimes", "Often", "Almost always"],
        type: 'score'
    },

    // BEHAVIOURAL STYLE
    {
        id: 16,
        section: SECTIONS.BEHAVIOURAL,
        text: "How often do you avoid situations because they make you anxious?",
        options: ["Never", "Occasionally", "Regularly", "Very often"],
        type: 'score'
    },
    {
        id: 17,
        section: SECTIONS.BEHAVIOURAL,
        text: "Do you delay tasks due to fear you won’t do them well enough?",
        options: ["No", "Occasionally", "Frequently", "Very often"],
        type: 'score'
    },
    {
        id: 18,
        section: SECTIONS.BEHAVIOURAL,
        text: "When feeling anxious, how often do you seek reassurance from others?",
        options: ["Rarely", "Sometimes", "Often", "Almost always"],
        type: 'score'
    },

    // LIFE IMPACT, TRIGGERS & COPING
    {
        id: 19,
        section: SECTIONS.IMPACT,
        text: "How much does anxiety interfere with your ability to focus?",
        options: ["Not at all", "A little", "Quite a bit", "A great deal"],
        type: 'score'
    },
    {
        id: 20,
        section: SECTIONS.IMPACT,
        text: "How often does anxiety affect your relationships or social interactions?",
        options: ["Rarely", "Sometimes", "Often", "Very often"],
        type: 'score'
    },
    {
        id: 21,
        section: SECTIONS.IMPACT,
        text: "Which of these tends to increase your anxiety the most?",
        options: [
            "Work or study pressure",
            "Social situations",
            "Conflict or criticism",
            "Health worries",
            "Financial stress",
            "Uncertainty or lack of control"
        ],
        type: 'choice'
    },
    {
        id: 22,
        section: SECTIONS.IMPACT,
        text: "When you feel anxious, how likely are you to use coping strategies (breathing, journalling, grounding, distraction)?",
        options: ["Very unlikely", "Occasionally", "Often", "Very often"],
        type: 'score'
    },
];
