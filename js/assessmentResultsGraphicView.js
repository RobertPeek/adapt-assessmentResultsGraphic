import Adapt from 'core/js/adapt';
import ComponentView from 'core/js/views/componentView';

class AssessmentResultsGraphicView extends ComponentView {

  preRender() {
    this.model.setLocking('_isVisible', false);

    this.listenTo(Adapt.parentView, 'preRemove', () => {
      this.model.unsetLocking('_isVisible');
    });

    this.listenTo(this.model, {
      'change:graphic': this.render
    });

  }

  postRender() {
    this.model.checkIfComplete();

    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
      this.setupInviewCompletion('.component__widget');
    });
  }

}

AssessmentResultsGraphicView.template = 'assessmentResultsGraphic';

export default AssessmentResultsGraphicView;
