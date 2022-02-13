import { QinColumn, QinLabel } from "qinpel-cps"

class FitxApp extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, world!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new FitxApp().putAsBody();