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
};

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
