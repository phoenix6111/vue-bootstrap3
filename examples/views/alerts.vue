<template>
    <div class="alerts-demo">
        <div class="block">
            <div class="block-header">
                <h2>Basic Example
                    <small>Wrap any text and an optional dismiss button in '.alert' and one of the four
                        contextual classes (e.g., .alert-success) for basic alert messages.
                    </small>
                </h2>
            </div>

            <div>
                <Alert type="success">
                    Well done! You successfully read this
                    important alert message.
                </Alert>
                <Alert type="info">
                    Heads up! This alert needs your attention, but
                    it's not super important.
                </Alert>
                <Alert type="warning">
                    Warning! Better check yourself, you're not
                    looking too good.
                </Alert>
                <Alert type="danger">
                    Oh snap! Change a few things up and try
                    submitting again.
                </Alert>
            </div>
        </div>

        <div class="block">
            <div class="block-header">
                <h2>Dismissible Alerts
                    <small>Build on any alert by adding an optional '.alert-dismissible' and close button.
                    </small>
                </h2>
            </div>

            <div>
                <Alert type="success" closable>
                    Well done! You successfully read this important alert message.
                </Alert>
                <Alert type="info" closable>
                    Heads up! This alert needs your attention, but it's not super important.
                </Alert>
                <Alert type="warning" closable>
                    Warning! Better check yourself, you're not looking too good.
                </Alert>
                <Alert type="danger" closable>
                    Oh snap! Change a few things up and try submitting again.
                </Alert>
            </div>
        </div>

        <div class="block">
            <div class="block-header">
                <h2>Links in alerts
                    <small>Use the '.alert-link' utility class to quickly provide matching colored links
                        within any alert.
                    </small>
                </h2>
            </div>

            <div>

                <Alert type="success" closable>
                    Well done! You successfully read <a href="" class="alert-link">this important alert
                    message.</a>
                </Alert>

                <Alert type="info" closable>
                    Heads up! This <a href="" class="alert-link">alert needs your attention</a>, but it's
                    not super important.
                </Alert>

                <Alert type="warning" closable>
                    Warning! Better check yourself, you're <a href="" class="alert-link">not looking too
                    good.</a>
                </Alert>

                <Alert type="danger" closable>
                    Oh snap! <a href="" class="alert-link">Change a few things up</a> and try submitting
                    again.
                </Alert>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Alerts'
    }
</script>