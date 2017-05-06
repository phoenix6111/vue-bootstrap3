import Timeline from './src/timeline';

Timeline.install = Vue => {
    Vue.component(Timeline.name,Timeline);
}

export default Timeline;