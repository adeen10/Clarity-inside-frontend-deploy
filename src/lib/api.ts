import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface SubmitAssessmentRequest {
    visitorId: string;
    variant: 'A' | 'B';
    testType: string;  // NEW: test slug (e.g., 'gad7-anxiety')
    answers: Record<number, string>;
}

export interface SubmitAssessmentResponse {
    assessmentId: string | number;
    scoreResult: {
        overall: {
            score: number;
            band: string;
        };
        detailedData: Record<string, any>;
    };
    freeReport: {
        summary: string;
        // Keep these if all tests have them, or use Record<string, any>
        sections: Record<string, string>;
        recommendations: string[];
    };
}

export interface CreateCheckoutRequest {
    assessmentId: string | number;
}

export interface CreateCheckoutResponse {
    checkoutUrl: string;
}

/**
 * Submit assessment answers to backend
 */
export async function submitAssessment(
    data: SubmitAssessmentRequest
): Promise<SubmitAssessmentResponse> {
    const response = await axios.post<SubmitAssessmentResponse>(
        `${API_BASE_URL}/api/assessments/submit`,
        data
    );
    return response.data;
}

/**
 * Create Stripe checkout session for paid report
 */
export async function createCheckout(
    data: CreateCheckoutRequest
): Promise<CreateCheckoutResponse> {
    const response = await axios.post<CreateCheckoutResponse>(
        `${API_BASE_URL}/api/assessments/create-checkout`,
        data
    );
    return response.data;
}
/**
 * Get assessment results by ID
 */
export async function getAssessment(
    id: string | number
): Promise<SubmitAssessmentResponse> {
    const response = await axios.get<SubmitAssessmentResponse>(
        `${API_BASE_URL}/api/assessments/${id}`
    );
    return response.data;
}
