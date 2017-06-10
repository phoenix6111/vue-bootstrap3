<script>
    import clickoutside from '../../../utils/clickoutside';
    import {oneOf} from '../../../utils/assist';
    import Emitter from '../../../mixins/emitter';
    import ButtonGroup from '../../button-group';
    import IButton from '../../button';

    const prefixCls = 'dropdown';

    export default {
        name: 'Dropdown',
        componentName: 'Dropdown',
        mixins: [Emitter],
        directives: {clickoutside},
        components: {
            ButtonGroup,IButton
        },
        props: {
            tag: { //dropdown 的根tag类型
                type:String,
                default:'div'
            },
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'hover'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            hideOnClick: {
                type: Boolean,
                default: true
            },
            splitButton: {
                type: Boolean,
                default: false
            },
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
                },
                default: 'default'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm','xs']);
                },
            },
            dropdownClass: {
                type:String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                timeout: null,
                visible: false
            };
        },
        watch: {
            visible(val) {
                this.broadcast('DropdownMenu', 'visible', val);
            }
        },
        methods: {
            show() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },
            hide() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },
            handleClick() {
                this.visible = !this.visible;
            },
            initEvent() {
                let { trigger, show, hide, handleClick, splitButton } = this;
                let triggerElm = splitButton
                    ? this.$refs.trigger.$el
                    : this.$slots.default[0].elm;

                if (trigger === 'hover') {
                    triggerElm.addEventListener('mouseenter', show);
                    triggerElm.addEventListener('mouseleave', hide);

                    let dropdownElm = this.$slots.dropdown[0].elm;

                    dropdownElm.addEventListener('mouseenter', show);
                    dropdownElm.addEventListener('mouseleave', hide);
                } else if (trigger === 'click') {
                    triggerElm.addEventListener('click', handleClick);
                }
            },
            handleMenuItemClick(command, instance) {
                if (this.hideOnClick) {
                    this.visible = false;
                }
                this.$emit('command', command, instance);
            }
        },
        render(h) {
            let { hide, splitButton, type, size } = this;

            var handleClick = _ => {
                this.$emit('click');
            };

            let triggerElm = !splitButton
                ? this.$slots.default
                : (
                    <button-group>
                        <i-button type={type} size={size} nativeOn-click={handleClick}>
                            {this.$slots.default}
                        </i-button>
                        <i-button ref="trigger" type={type} size={size} class="dropdown-toggle-split">
                            <span class="caret"></span>
                        </i-button>
                    </button-group>
                );

            const data = {
                'class': {
                    'dropdown': true
                },
                directives: [{
                    name: 'clickoutside',
                    value: hide
                }],
            };

            return h(this.tag, data, [triggerElm, this.$slots.dropdown])

        },
        mounted () {
            this.$on('menu-item-click', this.handleMenuItemClick);
            this.initEvent();

        }
    }
</script>