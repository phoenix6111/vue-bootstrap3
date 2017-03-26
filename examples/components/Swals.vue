<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Sweetalert对话框
                <small>Sweetalert对话框，展示提示信息。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="h4">
                A basic message
            </div>
            <IButton type="primary" @click="btn1">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A title with a text under
            </div>
            <IButton type="primary" @click="btn2">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A success message!
            </div>
            <IButton type="primary" @click="btn3">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A message with auto close timer
            </div>
            <IButton type="primary" @click="btn4">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                Custom HTML description and buttons
            </div>
            <IButton type="primary" @click="btn5">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A warning message, with a function attached to the "Confirm"-button...
            </div>
            <IButton type="primary" @click="btn6">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                and by passing a parameter, you can execute something else for "Cancel".
            </div>
            <IButton type="primary" @click="btn7">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A message with a custom image and CSS animation disabled
            </div>
            <IButton type="primary" @click="btn8">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                A message with custom width, padding and background
            </div>
            <IButton type="primary" @click="btn9">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                Ajax request example
            </div>
            <IButton type="primary" @click="btn10">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                Chaining modals (queue) example
            </div>
            <IButton type="primary" @click="btn11">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <div class="h4">
                Dynamic queue example
            </div>
            <IButton type="primary" @click="btn12">Try me!</IButton>

            <br>
            <br>
            <hr>
            <br>
            <br>

        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            btn1() {
                console.log(this.$swal);
                this.$swal("Any fool can use a computer");

            },
            btn2() {
                this.$swal('The Internet?',
                    'That thing is still around?',
                    'question');
            },
            btn3() {
                this.$swal(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            },
            btn4() {
                this.$swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000
                }).then(
                    function () {},
                    // handling the promise rejection
                    function (dismiss) {
                        if (dismiss === 'timer') {
                            console.log('I was closed by the timer')
                        }
                    }
                )
            },
            btn5() {
                this.$swal({
                    title: '<i>HTML</i> <u>example</u>',
                    type: 'info',
                    html:
                    'You can use <b>bold text</b>, ' +
                    '<a href="//github.com">links</a> ' +
                    'and other HTML tags',
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText:
                        '<i class="zmdi zmdi-thumb-up"></i> Great!',
                    cancelButtonText:
                        '<i class="zmdi zmdi-thumb-down"></i>'
                })
            },
            btn6() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(() => {
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                })
            },
            btn7() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    confirmButtonClass: 'btn btn-lg btn-success',
                    cancelButtonClass: 'btn btn-lg btn-danger',
                    buttonsStyling: false
                }).then(() => {
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }, (dismiss) => {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                        this.$swal(
                            'Cancelled',
                            'Your imaginary file is safe :)',
                            'error'
                        )
                    }
                })
            },
            btn8() {
                this.$swal({
                    title: 'Sweet!',
                    text: 'Modal with a custom image.',
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    animation: false
                })
            },
            btn9() {
                this.$swal({
                    title: 'Custom width, padding, background.',
                    width: 600,
                    padding: 100,
                    background: '#fff url(//bit.ly/1Nqn9HU)'
                })
            },
            btn10() {
                this.$swal({
                    title: 'Submit email to run ajax request',
                    input: 'email',
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    showLoaderOnConfirm: true,
                    preConfirm: function (email) {
                        return new Promise(function (resolve, reject) {
                            setTimeout(function() {
                                if (email === 'taken@example.com') {
                                    reject('This email is already taken.')
                                } else {
                                    resolve()
                                }
                            }, 2000)
                        })
                    },
                    allowOutsideClick: false
                }).then((email) => {
                    this.$swal({
                        type: 'success',
                        title: 'Ajax request finished!',
                        html: 'Submitted email: ' + email
                    })
                })
            },
            btn11() {
                this.$swal.setDefaults({
                    input: 'text',
                    confirmButtonText: 'Next &rarr;',
                    showCancelButton: true,
                    animation: false,
                    progressSteps: ['1', '2', '3']
                })

                var steps = [
                    {
                        title: 'Question 1',
                        text: 'Chaining swal2 modals is easy'
                    },
                    'Question 2',
                    'Question 3'
                ]

                this.$swal.queue(steps).then((result) => {
                    this.$swal.resetDefaults()
                    this.$swal({
                        title: 'All done!',
                        html:
                        'Your answers: <pre>' +
                        JSON.stringify(result) +
                        '</pre>',
                        confirmButtonText: 'Lovely!',
                        showCancelButton: false
                    })
                }, () => {
                    this.$swal.resetDefaults()
                })
            },
            btn12() {
                this.$swal.queue([{
                    title: 'Your public IP',
                    confirmButtonText: 'Show my public IP',
                    text:
                    'Your public IP will be received ' +
                    'via AJAX request',
                    showLoaderOnConfirm: true,
                    preConfirm: () => {
                        return new Promise((resolve) => {
                            /*$.get('https://api.ipify.org?format=json')
                                .done(function (data) {
                                    this.$swal.insertQueueStep(data.ip)
                                    resolve()
                                })*/
                        })
                    }
                }])
            }
        }
    }
</script>