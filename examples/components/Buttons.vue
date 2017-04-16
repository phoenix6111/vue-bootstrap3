<template>
    <section id="content" class="m-t-30">
        <div class="card">
            <div class="card-header">
                <h2>Basic Examples
                    <small>Use any of the available button classes to quickly create a styled button.
                    </small>
                </h2>
            </div>

            <div class="card-body card-padding">
                <p class="f-500 c-black m-b-20">Bootstrap Color Schemes</p>

                <div class="btn-demo">
                    <IButton>Button</IButton>
                    <IButton type="primary">Primary</IButton>
                    <!--<IButton type="primary" shape="icon" icon="home"></IButton>-->
                    <IButton type="secondary">Default</IButton>
                    <IButton type="info">Info</IButton>
                    <IButton type="success">Success</IButton>
                    <IButton type="warning">Warning</IButton>
                    <IButton type="danger">Danger</IButton>
                    <IButton type="inverse">Inverse</IButton>
                    <IButton type="link">Link</IButton>
                </div>

                <br/>
                <br/>
                <p class="f-500 c-black m-b-20">Outline Buttons</p>
                <div class="btn-demo">
                    <button class="btn btn-primary btn-outline">Primary</button>
                    <button class="btn btn-info btn-outline">Info</button>
                    <button class="btn btn-success btn-outline">Success</button>
                    <button class="btn btn-warning btn-outline">Warning</button>
                    <button class="btn btn-danger btn-outline">Danger</button>
                </div>

                <br/>
                <br/>
                <p class="f-500 c-black m-b-20">Circle Buttons</p>
                <div class="btn-demo">
                    <IButton type="primary" shape="circle">Primary</IButton>
                    <IButton type="info" shape="circle">Primary</IButton>
                    <IButton type="success" shape="circle">Primary</IButton>
                    <IButton type="warning" shape="circle">Primary</IButton>
                    <IButton type="danger" shape="circle">Primary</IButton>
                </div>

                <br/>
                <br/>
                <p class="f-500 c-black m-b-20">Loading Buttons</p>
                <div class="btn-demo">
                    <IButton type="primary" :loading="true">Primary</IButton>
                    <IButton type="info" :loading="true">Primary</IButton>
                    <IButton type="success" :loading="true">Primary</IButton>
                    <IButton type="warning" :loading="true">Primary</IButton>
                    <IButton type="danger" :loading="true">Primary</IButton>
                </div>

                <br/>
                <br/>

                <p class="f-500 c-black m-b-20">Optional Material Design Colors</p>

                <div class="btn-colors btn-demo"> <!-- Optional container for demo porpose only -->
                    <IButton class="bgm-cyan">Cyan</IButton>
                    <IButton class="bgm-teal">Teal</IButton>
                    <IButton class="bgm-amber">Amber</IButton>
                    <IButton class="bgm-orange">Orange</IButton>
                    <IButton class="bgm-deeporange">Deep Orange</IButton>
                    <IButton class="bgm-red">Red</IButton>
                    <IButton class="bgm-pink">Pink</IButton>
                    <IButton class="bgm-lightblue">Light Blue</IButton>
                    <IButton class="bgm-blue">Blue</IButton>
                    <IButton class="bgm-indigo">Indigo</IButton>
                    <IButton class="bgm-lime">Lime</IButton>
                    <IButton class="bgm-lightgreen">Light Green</IButton>
                    <IButton class="bgm-green">Green</IButton>
                    <IButton class="bgm-purple">Purple</IButton>
                    <IButton class="bgm-deeppurple">Deep Purple</IButton>
                    <IButton class="bgm-gray">Gray</IButton>
                    <IButton class="bgm-bluegray">Blue Gray</IButton>
                    <IButton class="bgm-black">Black</IButton>
                </div>

                <br/>
                <br/>

                <p class="f-500 c-black m-b-5">Button Sizes</p>
                <small>Fancy larger or smaller buttons? Add the button sizing classes.</small>

                <br/>
                <br/>

                <div class="btn-demo">
                    <IButton type="primary" size="lg">Large</IButton>
                    <IButton type="primary">Normal</IButton>
                    <IButton type="primary" size="sm">Small</IButton>
                    <IButton type="primary" size="xs">Extra Small</IButton>
                </div>

                <br/>
                <br/>

                <p class="f-500 c-black m-b-20">Disable Stat</p>

                <div class="btn-demo">
                    <IButton disabled>Default</IButton>
                    <IButton type="primary" disabled>Default</IButton>
                    <IButton type="info" disabled>Default</IButton>
                    <IButton type="success" disabled>Default</IButton>
                    <IButton type="warning" disabled>Default</IButton>
                    <IButton type="danger" disabled>Default</IButton>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2>Button Icons
                    <small>You can refer the Icons page for the complete list of Font Icons which are
                        inspired by Material Design
                    </small>
                </h2>
            </div>
            <div class="card-body card-padding">
                <div class="btn-demo">
                    <!--<button class="btn btn-default btn-icon-text">
                        <i class="zmdi zmdi-home"></i> Home
                    </button>-->
                    <IButton type="primary" icon-text icon="home">Home</IButton>
                    <IButton type="default" icon-text icon="search">Home</IButton>
                    <!--<button class="btn btn-default btn-icon-text">
                        <i class="zmdi zmdi-search"></i> Search
                    </button>-->
                    <button class="btn btn-default btn-icon-text">
                        <i class="zmdi zmdi-more-vert"></i> More
                    </button>
                    <button class="btn btn-default btn-icon-text">
                        <i class="zmdi zmdi-arrow-forward"></i>
                        Forward
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-arrow-back"></i> Back
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-refresh"></i> Sync
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-check"></i> Check
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-close"></i> Check
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-menu"></i> Menu
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-apps"></i> Apps
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-check-all"></i> Done
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-trending-up"></i> Up
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-apps"></i> Get
                    </button>
                    <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-phone"></i> Call
                    </button>

                    <br/>
                    <br/>
                    <br/>

                    <IButton type="default" icon="home"></IButton>
                    <IButton type="default" icon="search"></IButton>
                    <IButton type="default" icon="more-vert"></IButton>
                    <IButton type="default" icon="arrow-forward"></IButton>
                    <IButton type="default" icon="arrow-back"></IButton>
                    <IButton type="default" icon="refresh"></IButton>
                    <IButton type="default" icon="check"></IButton>
                    <IButton type="default" icon="close"></IButton>
                    <IButton type="default" icon="menu"></IButton>
                    <IButton type="default" icon="apps"></IButton>
                    <IButton type="default" icon="check-all"></IButton>
                    <IButton type="default" icon="trending-up"></IButton>
                    <IButton type="default" icon="apps"></IButton>
                    <IButton type="default" icon="phone"></IButton>

                    <br/>
                    <br/>
                    <IButton type="primary" icon="home"></IButton>
                    <IButton type="info" icon="search"></IButton>
                    <IButton type="success" icon="more-vert"></IButton>
                    <IButton type="warning" icon="arrow-forward"></IButton>
                    <IButton type="danger" icon="arrow-back"></IButton>
                    <IButton class="bgm-teal" icon="refresh"></IButton>
                    <IButton class="bgm-orange" icon="check"></IButton>
                    <IButton class="bgm-cyan" icon="close"></IButton>
                    <IButton class="bgm-lightgreen" icon="menu"></IButton>
                    <IButton class="bgm-lime" icon="apps"></IButton>
                    <IButton class="bgm-amber" icon="check-all"></IButton>
                    <IButton class="bgm-gray" icon="trending-up"></IButton>
                    <IButton class="bgm-lightblue" icon="apps"></IButton>
                    <IButton class="bgm-deeporange" icon="phone"></IButton>


                    <br/>
                    <br/>
                    <br/>
                    <IButton type="default" shape="icon" icon="home"></IButton>
                    <IButton type="default" shape="icon" icon="search"></IButton>
                    <IButton type="default" shape="icon" icon="more-vert"></IButton>
                    <IButton type="default" shape="icon" icon="arrow-forward"></IButton>

                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-arrow-back"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-refresh"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-check"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-close"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-menu"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-apps"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-check-all"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-trending-up"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-apps"></i></button>
                    <button class="btn btn-default btn-icon"><i class="zmdi zmdi-phone"></i></button>

                    <br/>
                    <br/>

                    <button class="btn btn-primary btn-icon"><i class="zmdi zmdi-home"></i></button>
                    <button class="btn btn-info btn-icon"><i class="zmdi zmdi-search"></i></button>
                    <button class="btn btn-success btn-icon"><i class="zmdi zmdi-more-vert"></i></button>
                    <button class="btn btn-warning btn-icon"><i class="zmdi zmdi-arrow-forward"></i>
                    </button>
                    <button class="btn btn-danger btn-icon"><i class="zmdi zmdi-arrow-back"></i></button>
                    <button class="btn bgm-teal btn-icon"><i class="zmdi zmdi-refresh"></i></button>
                    <button class="btn bgm-orange btn-icon"><i class="zmdi zmdi-check"></i></button>
                    <button class="btn bgm-cyan btn-icon"><i class="zmdi zmdi-close"></i></button>
                    <button class="btn bgm-lightgreen btn-icon"><i class="zmdi zmdi-menu"></i></button>
                    <button class="btn bgm-lime btn-icon"><i class="zmdi zmdi-apps"></i></button>
                    <button class="btn bgm-amber btn-icon"><i class="zmdi zmdi-check-all"></i></button>
                    <button class="btn bgm-gray btn-icon"><i class="zmdi zmdi-trending-up"></i></button>
                    <button class="btn bgm-lightblue btn-icon"><i class="zmdi zmdi-apps"></i></button>
                    <button class="btn bgm-deeporange btn-icon"><i class="zmdi zmdi-phone"></i></button>


                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2>Block Level Buttons
                    <small>Create block level buttons - those that span the full width of a parent - by
                        adding .btn-block.
                    </small>
                </h2>
            </div>

            <div class="card-padding card-body">
                <IButton type="default" long>Default</IButton>
                <br/>
                <br/>

                <IButton type="primary" long>Primary</IButton>

            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2>Button Groups
                    <small>Group a series of buttons together on a single line with the button group</small>
                </h2>
            </div>

            <div class="card-body card-padding">
                <p class="f-500 c-black m-b-20">Basic Example</p>
                <div class="btn-group-demo">
                    <ButtonGroup>
                        <IButton type="default">Left</IButton>
                        <IButton type="default">Middle</IButton>
                        <IButton type="default">Right</IButton>
                    </ButtonGroup>

                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn btn-info">Left</button>
                        <button type="button" class="btn btn-info">Middle</button>
                        <button type="button" class="btn btn-info">Right</button>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn btn-success">Left</button>
                        <button type="button" class="btn btn-success">Middle</button>
                        <button type="button" class="btn btn-success">Right</button>
                        <button type="button" class="btn btn-success">Right</button>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn btn-warning">Left</button>
                        <button type="button" class="btn btn-warning">Middle</button>
                        <button type="button" class="btn btn-warning">Right</button>
                    </div>

                    <br/>
                    <br/>

                    <p class="f-500 c-black m-b-5">SplitButtons</p>
                    <small>SplitButtons examples
                    </small>

                    <br/>
                    <br/>

                    <SplitButton type="primary" size="xs">
                        SplitButton
                    </SplitButton>
                    <SplitButton type="primary" size="sm">
                        SplitButton
                    </SplitButton>
                    <SplitButton type="primary"
                                 @btn-click="btnClick"
                                 @caret-click="caretClick"
                                 @caret-mouse-enter="caretMouseEnter"
                                 @caret-mouse-leave="caretMouseLeave">
                        SplitButton
                    </SplitButton>
                    <SplitButton type="primary" size="lg">
                        SplitButton
                    </SplitButton>

                </div>

                <br/>
                <br/>

                <p class="f-500 c-black m-b-5">Button Toolbars</p>
                <small>Combine sets of '.btn-group.' into a '.btn-toolbar' for more complex components.
                </small>

                <br/>
                <br/>

                <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default">1</button>
                        <button type="button" class="btn btn-default">2</button>
                        <button type="button" class="btn btn-default">3</button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default">4</button>
                        <button type="button" class="btn btn-default">5</button>
                        <button type="button" class="btn btn-default">6</button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default">7</button>
                        <button type="button" class="btn btn-default">8</button>
                        <button type="button" class="btn btn-default">9</button>
                    </div>
                </div>

                <br/>

                <div class="btn-toolbar" role="toolbar">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">2</button>
                        <button type="button" class="btn btn-primary">3</button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">4</button>
                        <button type="button" class="btn btn-primary">5</button>
                        <button type="button" class="btn btn-primary">6</button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">7</button>
                        <button type="button" class="btn btn-primary">8</button>
                        <button type="button" class="btn btn-primary">9</button>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <p class="f-500 c-black m-b-5">Button Group Sizing</p>
                <small>Instead of applying button sizing classes to every button in a group, just add
                    '.btn-group-*' to each '.btn-group', including when nesting multiple groups.
                </small>

                <br/>
                <br/>

                <div class="btn-group-demo">
                    <div class="btn-group btn-group-lg" role="group">
                        <button type="button" class="btn btn-default">Left</button>
                        <button type="button" class="btn btn-default">Middle</button>
                        <button type="button" class="btn btn-default">Right</button>
                    </div>

                    <div class="btn-group btn-group-lg" role="group">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                </div>

                <br/>

                <div class="btn-group-demo">
                    <div class="btn-group btn-group" role="group">
                        <button type="button" class="btn btn-default">Left</button>
                        <button type="button" class="btn btn-default">Middle</button>
                        <button type="button" class="btn btn-default">Right</button>
                    </div>

                    <div class="btn-group btn-group" role="group">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                </div>

                <br/>

                <div class="btn-group-demo">
                    <div class="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-default">Left</button>
                        <button type="button" class="btn btn-default">Middle</button>
                        <button type="button" class="btn btn-default">Right</button>
                    </div>

                    <div class="btn-group btn-group-sm" role="group">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                </div>

                <br/>

                <div class="btn-group-demo">
                    <div class="btn-group btn-group-xs" role="group">
                        <button type="button" class="btn btn-default">Left</button>
                        <button type="button" class="btn btn-default">Middle</button>
                        <button type="button" class="btn btn-default">Right</button>
                    </div>

                    <div class="btn-group btn-group-xs" role="group">
                        <button type="button" class="btn btn-primary">Left</button>
                        <button type="button" class="btn btn-primary">Middle</button>
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <p class="f-500 c-black m-b-5">Justified Button Groups</p>
                <small>Make a group of buttons stretch at equal sizes to span the entire width of its
                    parent. Also works with button dropdowns within the button group.
                </small>

                <br/>
                <br/>

                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">Left</button>
                    </div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">Middle</button>
                    </div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default">Right</button>
                    </div>
                </div>

                <br/>

                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary">Left</button>
                    </div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary">Middle</button>
                    </div>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary">Right</button>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <p class="f-500 c-black m-b-5">Nesting</p>
                <small>Place a '.btn-group' within another '.btn-group' when you want dropdown menus mixed
                    with a series of buttons.
                </small>

                <br/>
                <br/>

                <div class="btn-group-demo">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default">1</button>
                        <button type="button" class="btn btn-default">2</button>

                        <div class="btn-group">
                            <button type="button" class="btn btn-default dropdown-toggle"
                                    data-toggle="dropdown">
                                Dropdown
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">1</button>
                        <button type="button" class="btn btn-primary">2</button>

                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="dropdown">
                                Dropdown
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'Buttons',
        methods: {
            btnClick() {
                console.log("Split-button btn clicked");
            },
            caretClick() {
                console.log("Split-button caret btn clicked");
            },
            caretMouseEnter() {
                console.log("Split-button caret mouse entering");
            },
            caretMouseLeave() {
                console.log("Split-button caret mouse leaveing");
            },
        }
    }
</script>