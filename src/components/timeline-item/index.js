import TimelineItem from '../timeline/src/timeline-item';

TimelineItem.install = Vue => {
    Vue.component(TimelineItem.name,TimelineItem);
}

export default TimelineItem;