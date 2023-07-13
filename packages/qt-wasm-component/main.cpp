#include <QApplication>
#include <QLabel>
#include <emscripten/bind.h>

QLabel *label;

int main(int argc, char **argv)
{
    QApplication app(argc, argv);

    label = new QLabel("I am a Qt QLabel. You clicked 0 times");
    label->show();

    return app.exec();
}

void updateLabel(int number)
{
    label->setText("I am a Qt QLabel. You clicked " + QString::number(number) + " times");
}

EMSCRIPTEN_BINDINGS(my_module)
{
    emscripten::function("updateLabel", &updateLabel);
}