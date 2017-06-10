<style>
    .color-block {
        height: 100px;
        color: rgba(255,255,255,0.9);
        text-align: center;
        padding: 15px 0;
        border-radius: 2px;
        margin-bottom: 25px;
    }
    
    .color-block span {
        display: block;
    }
    
    .color-block .color {
        font-size: 14px;
        text-transform: uppercase;
    }
    
    .color-block .code {
        margin: 5px 0;
    }
    
    .color-block .less {
        font-size: 11px;
    }
    
    .color-block.dark {
        color:#666;
    }
</style>

## Color 色彩

推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。

### 主色

使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。

<div class="row">
    <div class="col-sm-4 col-xs-6">
        <div class="color-block bgm-primary">
            <span class="color">Primary</span>
            <span class="code">#2196F3</span>
            <span class="less">@bgm-primary</span>
        </div>
    </div>
    <div class="col-sm-4 col-xs-6">
        <div class="color-block bgm-primary-light">
            <span class="color">Primary-Light</span>
            <span class="code">#4db3FF</span>
            <span class="less">@bgm-primary-light</span>
        </div>
    </div>
    <div class="col-sm-4 col-xs-6">
        <div class="color-block bgm-primary-dark">
            <span class="color">Primary-Dark</span>
            <span class="code">#0D8AEE</span>
            <span class="less">@bgm-primary-dark</span>
        </div>
    </div>
    
</div>

### 辅助色

辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

<div class="row">
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-info">
            <span class="color">Info</span>
            <span class="code">#2196F3</span>
            <span class="less">@bgm-info</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-success">
            <span class="color">Success</span>
            <span class="code">#4db3FF</span>
            <span class="less">@bgm-success</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-warning">
            <span class="color">Warning</span>
            <span class="code">#0D8AEE</span>
            <span class="less">@bgm-warning</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-danger">
            <span class="color">Danger</span>
            <span class="code">#0D8AEE</span>
            <span class="less">@bgm-danger</span>
        </div>
    </div>
</div>

### 中性色 

中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

<div class="row">
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-title">
            <span class="color">标题 Title</span>
            <span class="code">#333</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-content">
            <span class="color">正文 Content</span>
            <span class="code">#5E5E5E</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-sub-color">
            <span class="color">辅助/图标 Sub Color</span>
            <span class="code">#AEAEAE</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-disabled">
            <span class="color">失效 Disabled</span>
            <span class="code">#c3cbd6</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-border dark">
            <span class="color">边框 Border</span>
            <span class="code">#d9d9d9</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-divider dark">
            <span class="color">分割线 Divider</span>
            <span class="code">#EBEBEB</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-background dark">
            <span class="color">背景 Background</span>
            <span class="code">#f3f3f3</span>
        </div>
    </div>
</div>

### Colors from Material Design

These colors are inspired by bold color statements juxtaposed with muted environments, taking cues from contemporary architecture, road signs, pavement marking tape, and sports courts. Emphasize bold shadows and highlights. Introduce unexpected and vibrant colors. (Taken by Google's color page)

<div class="row">
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-red">
            <span class="color">Red</span>
            <span class="code">#F44336</span>
            <span class="less">@bgm-red</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-pink">
            <span class="color">Pink</span>
            <span class="code">#E91E63</span>
            <span class="less">@bgm-pink</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-purple">
            <span class="color">Purple</span>
            <span class="code">#9C27B0</span>
            <span class="less">@bgm-purple</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-deeppurple">
            <span class="color">Deep Purple</span>
            <span class="code">#673AB7</span>
            <span class="less">@bgm-deeppurple</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-indigo">
            <span class="color">Indigo</span>
            <span class="code">#3F51B5</span>
            <span class="less">@bgm-indigo</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-blue">
            <span class="color">Blue</span>
            <span class="code">#2196F3</span>
            <span class="less">@bgm-blue</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-lightblue">
            <span class="color">Light Blue</span>
            <span class="code">#03A9F4</span>
            <span class="less">@bgm-lightblue</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-cyan">
            <span class="color">Cyan</span>
            <span class="code">#00BCD4</span>
            <span class="less">@bgm-cyan</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-teal">
            <span class="color">Teal</span>
            <span class="code">#009688</span>
            <span class="less">@bgm-teal</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-green">
            <span class="color">Green</span>
            <span class="code">#4CAF50</span>
            <span class="less">@bgm-green</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-lightgreen">
            <span class="color">Light Green</span>
            <span class="code">#8BC34A</span>
            <span class="less">@bgm-lightgreen</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-lime">
            <span class="color">Lime</span>
            <span class="code">#CDDC39</span>
            <span class="less">@bgm-lime</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-yellow">
            <span class="color">Yellow</span>
            <span class="code">#FFEB3B</span>
            <span class="less">@bgm-yellow</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-amber">
            <span class="color">Amber</span>
            <span class="code">#FFC107</span>
            <span class="less">@bgm-amber</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-orange">
            <span class="color">Orange</span>
            <span class="code">#FF9800</span>
            <span class="less">@bgm-orange</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-deeporange">
            <span class="color">Deep Orange</span>
            <span class="code">#FF5722</span>
            <span class="less">@bgm-deeporange</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-brown">
            <span class="color">Brown</span>
            <span class="code">#795548</span>
            <span class="less">@bgm-brown</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-gray">
            <span class="color">Gray</span>
            <span class="code">#9E9E9E</span>
            <span class="less">@bgm-gray</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-bluegray">
            <span class="color">Blue Gray</span>
            <span class="code">#607D8B</span>
            <span class="less">@bgm-bluegray</span>
        </div>
    </div>
    <div class="col-sm-3 col-xs-6">
        <div class="color-block bgm-black">
            <span class="color">Black</span>
            <span class="code">#000000</span>
            <span class="less">@bgm-black</span>
        </div>
    </div>
</div>



