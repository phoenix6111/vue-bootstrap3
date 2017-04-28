<template lang="html">
    <div class="demo-block">
        <div class="block-header">
            <h2>基础用法
                <small>Below is an example of a basic card with mixed content and a fixed width.
                    Cards have no fixed width to start, so they’ll naturally fill the full width of
                    its parent element.
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-5 m-l-20">
                <ICard>
                    <template slot="title">Card title</template>
                    <template slot="subtitle">Praesent commodo cursus magna scelerisque consectetur.</template>
                    <template>
                        Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi
                        blandit,
                        tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit
                        purus,
                        eu facilisis ante. Mauris nec commodo felis.
                    </template>
                </ICard>
            </div>
        </div>


        <br><br>

        <div class="block-header">
            <h2>CARD WITH ACTIONS
                <small>
                    Cards can also contains action links in icon format.
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-5 m-l-20">
                <ICard title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                    <template slot="actions">
                        <ul class="actions">
                            <Dropdown align="right">
                                <a href="" data-toggle="dropdown" aria-expanded="false">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                <Dropdown-menu slot="list">
                                    <Dropdown-item>Refresh</Dropdown-item>
                                    <Dropdown-item>Manage Widgets</Dropdown-item>
                                    <Dropdown-item>Widgets Settings</Dropdown-item>
                                </Dropdown-menu>
                            </Dropdown>
                        </ul>
                    </template>

                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

                </ICard>
            </div>

            <div class="col-sm-5 m-l-20">
                <ICard title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                    <template slot="actions">
                        <ul class="actions">
                            <li>
                                <a href="">
                                    <i class="zmdi zmdi-refresh-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="zmdi zmdi-download"></i>
                                </a>
                            </li>
                            <Dropdown align="right">
                                <a href="" data-toggle="dropdown" aria-expanded="false">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                <Dropdown-menu slot="list">
                                    <Dropdown-item>Refresh</Dropdown-item>
                                    <Dropdown-item>Manage Widgets</Dropdown-item>
                                    <Dropdown-item>Widgets Settings</Dropdown-item>
                                </Dropdown-menu>
                            </Dropdown>
                        </ul>
                    </template>

                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

                </ICard>
            </div>

            <div class="col-sm-5 m-l-20">
                <ICard type="primary"
                       inverse
                       title="Card title"
                       subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                    <template slot="actions">
                        <ul class="actions">
                            <Dropdown align="right">
                                <a href="" data-toggle="dropdown" aria-expanded="false">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                <Dropdown-menu slot="list">
                                    <Dropdown-item>Refresh</Dropdown-item>
                                    <Dropdown-item>Manage Widgets</Dropdown-item>
                                    <Dropdown-item>Widgets Settings</Dropdown-item>
                                </Dropdown-menu>
                            </Dropdown>
                        </ul>
                    </template>

                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

                </ICard>
            </div>
        </div>


        <br><br>

        <div class="block-header">
            <h2>BLOCKS
                <small>
                    The building block of a card is the .card-block. Use it whenever you need a padded section within a card.
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-5 m-l-20">
                <ICard>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
                </ICard>
            </div>

            <div class="col-sm-5 m-l-20">
                <ICard>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                </ICard>
            </div>
        </div>


        <br><br>

        <div class="block-header">
            <h2>CARD LINKS
                <small>
                    Links are added and placed next to each other by adding .card-link to a <a> tag.</a>
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-5 m-l-20">
                <ICard title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
                    <template slot="footer">
                        <a class="card-link" href="#">Card link</a>
                        <a class="card-link" href="#">Another link</a>
                    </template>
                </ICard>
            </div>

            <div class="col-sm-5 m-l-20">
                <ICard>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <template slot="footer">
                        <a class="card-link" href="#">Card link</a>
                        <a class="card-link" href="#">Another link</a>
                    </template>
                </ICard>
            </div>
        </div>


        <div class="block-header">
            <h2>IMAGES
                <small>
                    Cards can also include images in the top and bottom.</a>
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-4 m-l-20">
                <ICard title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                    <template slot="card-img-top">
                        <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                    </template>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
                </ICard>
            </div>

            <div class="col-sm-4 m-l-20">
                <ICard title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                    <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                    <template slot="card-img-bottom">
                        <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                    </template>
                </ICard>
            </div>
        </div>

        <br><br>

        <div class="block-header">
            <h2>IMAGE OVERLAYS
                <small>
                    Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need .card-inverse
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-4 m-l-20">
                <ICard card-img-overlay inverse
                       title="Card title"
                       subtitle="Praesent commodo cursus magna scelerisque consectetur">
                    <template slot="card-img">
                        <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                    </template>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
                </ICard>
            </div>
        </div>


        <br><br>

        <div class="block-header">
            <h2>OUTLINE CARDS
                <small>
                    In need of a colored card, but not the hefty background colors they bring? Replace the default modifier classes with the .card-outline-* ones to style just the border-color of a card.
                </small>
            </h2>
        </div>
        <div class="row">
            <div class="col-sm-4 m-l-20">
                <ICard outline type="secondary">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>
            <div class="col-sm-4 m-l-20">
                <ICard outline type="primary">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>
            <div class="col-sm-4 m-l-20">
                <ICard outline type="info">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>
            <div class="col-sm-4 m-l-20">
                <ICard outline type="success">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>
            <div class="col-sm-4 m-l-20">
                <ICard outline type="warning">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>
            <div class="col-sm-4 m-l-20">
                <ICard outline type="danger">
                    <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </ICard>
            </div>

        </div>


    </div>
</template>
<script>

    export default {}
</script>

<style scope="page">
    .demo-block {
        width:140%;
        height: 3310px;
        background-color: #f3f3f3;
        margin-left: -30px;
        margin-right: -100px;
        padding-top: 30px;
        margin-top: -17px;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>