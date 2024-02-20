export interface ICard {
  get_activities: GetActivities;
}

export interface GetActivities {
  card_id: number;
  card_name: string;
  activities: string[];
  color: string;
  tool_categories: ToolCategory[];
}

export interface ToolCategory {
  tool_category_id: number;
  tool_category_name: string;
  tools: Tool[];
}

export interface Tool {
  tool_id: string;
  tool_name: string;
  level_id: number;
  level_name: string;
}
