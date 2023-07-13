cmake_minimum_required(VERSION 3.19)

project(AnalogClock)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(QT6_DIR $ENV{QTDIR})

set(CMAKE_PREFIX_PATH ${QT6_DIR})
set(CMAKE_INCLUDE_CURRENT_DIR ON)

# Copies directly .wasm and .js to the public directory
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/../../app/public)

find_package(Qt6 COMPONENTS Core)
find_package(Qt6 COMPONENTS Gui)
find_package(Qt6 COMPONENTS Widgets)

qt_add_executable(qt-wasm-component
    main.cpp
)

target_link_libraries(qt-wasm-component PUBLIC
    Qt::Core
    Qt::Gui
    Qt::Widgets
)
