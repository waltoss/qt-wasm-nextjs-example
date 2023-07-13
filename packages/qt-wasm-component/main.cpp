#include <QApplication>
#include <QLabel>
#include <emscripten/bind.h>

QLabel *label;

int main(int argc, char **argv)
{
    QApplication app(argc, argv);

    label = new QLabel("Number: 0");
    label->show();

    return app.exec();
}

void updateLabel(int number)
{
    label->setText("Number: " + QString::number(number));
}

EMSCRIPTEN_BINDINGS(my_module)
{
    emscripten::function("updateLabel", &updateLabel);
}