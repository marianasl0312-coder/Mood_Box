
export type AppView = 'quiz' | 'loading' | 'home' | 'search' | 'profile' | 'result';

export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    description: string;
  }[];
}

export interface UserAnswers {
  battery: string;
  space: string;
  sensory: string;
  reward: string;
}

export interface CommunityMember {
  id: number;
  name: string;
  image: string;
  hobby: string;
}
