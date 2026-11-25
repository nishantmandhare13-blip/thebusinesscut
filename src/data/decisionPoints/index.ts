import { DecisionPoint } from '@/types/decisionPoint';
import { DISCOVERY_DECISION_POINTS } from './discovery';
import { STRATEGY_DECISION_POINTS } from './strategy';
import { PRIORITIZATION_DECISION_POINTS } from './prioritization';
import { DESIGN_DECISION_POINTS } from './design';
import { GROWTH_DECISION_POINTS } from './growth';
import { MARKETING_DECISION_POINTS } from './marketing';
import { ENTREPRENEURSHIP_DECISION_POINTS } from './entrepreneurship';
import { FINANCE_DECISION_POINTS } from './finance';
import { OPERATIONS_DECISION_POINTS } from './operations';
import { LEADERSHIP_DECISION_POINTS } from './leadership';
import { NEGOTIATION_DECISION_POINTS } from './negotiation';
import { ETHICS_DECISION_POINTS } from './ethics';

export const ALL_DECISION_POINTS: DecisionPoint[] = [
  ...DISCOVERY_DECISION_POINTS,
  ...STRATEGY_DECISION_POINTS,
  ...PRIORITIZATION_DECISION_POINTS,
  ...DESIGN_DECISION_POINTS,
  ...GROWTH_DECISION_POINTS,
  ...MARKETING_DECISION_POINTS,
  ...ENTREPRENEURSHIP_DECISION_POINTS,
  ...FINANCE_DECISION_POINTS,
  ...OPERATIONS_DECISION_POINTS,
  ...LEADERSHIP_DECISION_POINTS,
  ...NEGOTIATION_DECISION_POINTS,
  ...ETHICS_DECISION_POINTS
];

export const DECISION_POINTS_BY_ID: Record<string, DecisionPoint> = Object.fromEntries(
  ALL_DECISION_POINTS.map(dp => [dp.lessonId, dp])
);

export function getDecisionPoint(lessonId: string): DecisionPoint | undefined {
  return DECISION_POINTS_BY_ID[lessonId];
}

export function hasDecisionPoint(lessonId: string): boolean {
  return Boolean(DECISION_POINTS_BY_ID[lessonId]);
}
