import { createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';

const initialize = (getState, getRecoveryState) => {
    if (process.env.NODE_ENV === 'development') {
        return createSmartappDebugger({
            // Токен из Кабинета разработчика
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMDQ0OTdmNGEyZWQ0ZTk0MzMyOWZiOGRmYTA3MDEzMWUwMTVhMGJlYjcxOGU5YzA2ODViMTc1NDQyYjM2ZTQ2NTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY0NDUzNDc2NiwiaWF0IjoxNjQ0NDQ4MzU2LCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiMDJmNjQ5MTAtNzRhOC00MGQwLTk4NDktYjBjZjliZDFkYjY0Iiwic2lkIjoiNjEzNjkxMDItY2VhOC00YjRkLTgyYjQtNmVjMjYwMGY2MWJlIn0.huwZtMnETChq3QvIvYfyZa08yduCYPSqIlNBpv9NMrXIMcus5gbhrVl9MMjQhakTRbcEe9WhdisUnsa5F728u8YFivseQcQ3KkNjsSdMgmaYKtrxORyhyOGUj53nFYgwIJz4w8r-2oyipDqH_wmrZyxnxTqWLpUlbFZ_A3Kck2F8SwPNoNOKJiOT4baZw32XrtwXP_RxbAlKHUiGkhhLREqia8iabiBG8c9gC6h_2vfggdPM4Z8H-ZhnJmDpDHxG3ki3pcYY2hfRTN-HpTu2CPM7s1yGZAQgcYzPDjGm1PQ2rpPqJq2wq83Ghrs2DGGHdKp0yubaKbcjJQCFJTl2t-I3Rk6QJVFIIK0sq9dXgNhSUocxL3lJWIYY5T0BLvZMZuM5L4-WbmVGUCpNhldaD_vir-3rzZV06yo-_xVrw0fAN2cU4rgRDzaOxU9BnWJXpKug6b3XVAD9oPsxSovNzNoHmbVSHMjoTAxUDZJa2LMmvkJgN5fwZlKSMg5U5ktFwf-N8uWi5L8JowI5_WiMAMWKK1MrPrsMkTzRqiS4iE3o6BcCbc4i-0CWlrpKkwQLcth9pyeIf-gRx_wo9TsmPrVw3xo6Wnk1ueDURmbkZBjOQnfHZC-gKGwTttF7ol1ZZfD9p5ygC3OXRkhmAjZ7SIcUnGEw26qiJZ8uOeNWOF0',
            // Пример фразы для запуска смартапа
            initPhrase: 'SberBuild',
            // Текущее состояние смартапа
            getState,
            // Состояние смартапа, с которым он будет восстановлен при следующем запуске
            getRecoveryState,
            // Необязательные параметры панели, имитирующей панель на реальном устройстве
            nativePanel: {
                // Стартовый текст в поле ввода пользовательского запроса
                defaultText: 'Покажи что-нибудь',
                // Позволяет включить вид панели, максимально приближенный к панели на реальном устройстве
                screenshotMode: true,
                // Атрибут `tabindex` поля ввода пользовательского запроса
                tabIndex: -1,
            },
        });
    }

	  // Только для среды production
    // return createAssistant({ getState, getRecoveryState });
}

const assistant = initialize(() => state, () => recoveryState);
assistant.on('data', (command) => {
    // Подписка на команды ассистента, в т.ч. команда инициализации смартапа.
    // Ниже представлен пример обработки голосовых команд "ниже"/"выше"
    if (command.navigation) {
        switch(command.navigation.command) {
            case 'UP':
                window.scrollTo(0, 0);
                break;
            case 'DOWN':
                window.scrollTo(0, 1000);
                break;
        }
    }
});