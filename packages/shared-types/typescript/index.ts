export interface AuthConfig {
    auth_type: string;
    login_url?: string;
    username_selector?: string;
    password_selector?: string;
    submit_selector?: string;
    username?: string;
    password?: string;
    bearer_token?: string;
    success_indicator?: string;
}

export interface CrawlerConfig {
    target_url: string;
    max_pages?: number;
    max_depth?: number;
    concurrent_pages?: number;
    page_timeout?: number;
    wait_after_load?: number;
    respect_robots_txt?: boolean;
    include_patterns?: string[];
    exclude_patterns?: string[];
    auth_config?: AuthConfig;
    capture_screenshots?: boolean;
    capture_dom?: boolean;
    capture_network?: boolean;
    capture_console?: boolean;
    viewport_width?: number;
    viewport_height?: number;
    user_agent?: string;
    extra_headers?: Record<string, string>;
    cookies?: any[];
}

export interface Issue {
    id: string;
    scan_job_id: string;
    page_id: string;
    detector_name: string;
    category: string;
    subcategory?: string;
    severity: "critical" | "high" | "medium" | "low" | "info";
    title: string;
    description?: string;
    element_selector?: string;
    element_html?: string;
    screenshot_path?: string;
    evidence?: Record<string, any>;
    recommendation?: string;
    code_snippet?: string;
    confidence_score: number;
    is_false_positive: boolean;
    status: "open" | "acknowledged" | "fixed" | "wont_fix";
    first_seen: string;
    last_seen: string;
}

export interface PageSummary {
    id: string;
    url: string;
    page_type: string;
    title: string;
    hygiene_score?: number;
    http_status: number;
}

export interface JobHygieneScore {
    overall_score: number;
    grade: string;
    category_scores: Record<string, number>;
    critical_count: number;
    high_count: number;
    medium_count: number;
    low_count: number;
    worst_page?: PageSummary;
    best_page?: PageSummary;
    score_distribution: Record<string, number>;
    critical_pages: PageSummary[];
}
