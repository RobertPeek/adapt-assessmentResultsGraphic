import components from 'core/js/components';
import AssessmentResultsGraphicModel from './assessmentResultsGraphicModel';
import AssessmentResultsGraphicView from './assessmentResultsGraphicView';

export default components.register('assessmentResultsGraphic', {
  model: AssessmentResultsGraphicModel,
  view: AssessmentResultsGraphicView
});