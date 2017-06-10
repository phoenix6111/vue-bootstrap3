<script>
  export default {
    methods: {
      open() {
        this.$modalAlert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$notice.info({
              title: "action "+action
            });
          }
        });
      },
        open1() {
            this.$modalAlert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              noAnimation:true,
              callback: action => {
                this.$notice.info({
                  title: "action "+action
                });
              }
            });
          },
      open11() {
          this.$modalAlert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            transition:'ease',
            callback: action => {
              this.$notice.info({
                title: "action "+action
              });
            }
          });
        },
      open2() {
          this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => {
            this.$notice.info({
              title: '删除成功!'
            });
          }).catch(() => {
            this.$notice.info({
              title: '已取消删除'
            });          
          });
        },
      open22() {
            this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'success'
            }).then(() => {
              this.$notice.info({
                title: '删除成功!'
              });
            }).catch(() => {
              this.$notice.info({
                title: '已取消删除'
              });          
            });
          },
        open222() {
            this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$notice.info({
                title: '删除成功!'
              });
            }).catch(() => {
              this.$notice.info({
                title: '已取消删除'
              });          
            });
          },
        open2222() {
            this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'danger'
            }).then(() => {
              this.$notice.info({
                title: '删除成功!'
              });
            }).catch(() => {
              this.$notice.info({
                title: '已取消删除'
              });          
            });
          },
      open3() {
          this.$modalPrompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
          }).then(({ value }) => {
            this.$notice.success({
              title: '你的邮箱是: ' + value
            });
          }).catch(() => {
            this.$notice.info({
              title: '取消输入'
            });       
          });
        },
      open4() {
              const h = this.$createElement;
              this.$modal({
                title: '消息',
                message: h('p', null, [
                  h('span', null, '内容可以是 '),
                  h('i', { style: 'color: teal' }, 'VNode')
                ]),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                  if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中...';
                    setTimeout(() => {
                      done();
                      setTimeout(() => {
                        instance.confirmButtonLoading = false;
                      }, 300);
                    }, 3000);
                  } else {
                    done();
                  }
                }
              }).then(action => {
                this.$notice.info({
                  title: 'action: ' + action
                });
              });
            },
    }
  }
</script>

## MessageBox 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。

### 代码演示

::: demo
<summary>
  #### 消息提示
  当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。
</summary>

```html
<template>
<div class="row">
    <div class="col-sm-4">
        <i-button type="primary" @click="open">点击打开 Message Box</i-button>
    </div>
    <div class="col-sm-4">
        <i-button type="primary" @click="open1">NoAnimation Message Box</i-button>
    </div>
    <div class="col-sm-4">
        <i-button type="primary" @click="open11">Custom Transition Message Box</i-button>
    </div>
</div>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$modalAlert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$notice.info({
              title: "action "+action
            });
          }
        });
      },
      open1() {
          this.$modalAlert('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            noAnimation:true,
            callback: action => {
              this.$notice.info({
                title: "action "+action
              });
            }
          });
        },
      open11() {
            this.$modalAlert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              transition:'ease',
              callback: action => {
                this.$notice.info({
                  title: "action "+action
                });
              }
            });
          }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 确认消息
  提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="open2">Info Message Box</i-button>
  <i-button type="primary" @click="open22">Success Message Box</i-button>
  <i-button type="primary" @click="open222">Warning Message Box</i-button>
  <i-button type="primary" @click="open2222">Danger Message Box</i-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$notice.info({
            title: '删除成功!'
          });
        }).catch(() => {
          this.$notice.info({
            title: '已取消删除'
          });          
        });
      },
      open22() {
          this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'success'
          }).then(() => {
            this.$notice.info({
              title: '删除成功!'
            });
          }).catch(() => {
            this.$notice.info({
              title: '已取消删除'
            });          
          });
        },
      open222() {
          this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$notice.info({
              title: '删除成功!'
            });
          }).catch(() => {
            this.$notice.info({
              title: '已取消删除'
            });          
          });
        },
      open2222() {
          this.$modalConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'danger'
          }).then(() => {
            this.$notice.info({
              title: '删除成功!'
            });
          }).catch(() => {
            this.$notice.info({
              title: '已取消删除'
            });          
          });
        }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 提交内容
  当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="open3">点击打开 Message Box</i-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$modalPrompt('请输入邮箱', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            inputErrorMessage: '邮箱格式不正确'
          }).then(({ value }) => {
            this.$notice.success({
              title: '你的邮箱是: ' + value
            });
          }).catch(() => {
            this.$notice.info({
              title: '取消输入'
            });       
          });
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 自定义
  可自定义配置不同内容。
</summary>

```html
<template>
  <i-button type="primary" @click="open4">点击打开 Message Box</i-button>
</template>

<script>
  export default {
    methods: {
      open4() {
        const h = this.$createElement;
        this.$modal({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$notice.info({
            title: 'action: ' + action
          });
        });
      },
    }
  }
</script>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | Number | - |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | Number | - |

### Affix Events
| 参数        | 说明           | 回调参数               |
|------------|----------------|-------------------|
| change | 固定状态改变时触发的事件 | affixed |
