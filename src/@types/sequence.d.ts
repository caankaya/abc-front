export interface ISequence {
  sequence_id: number;
  sequence_name: string;
  sessions: Session[];
}

export interface Session {
  session_id: number;
  session_name: string;
  card_id: number;
  card_name: string;
  tool_id: number;
  tool_name: string;
  comments: string;
  time: number;
  is_face_to_face: boolean;
  is_group_work: boolean;
  equipment: string;
  level_name: string;
  color: string;
}
