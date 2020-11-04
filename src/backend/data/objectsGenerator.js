const fs = require('fs');

let data = [];
const numOfElements = 100;

const events = ['Загрузка нового файла', 'Изменение прав доступа', 'Создание новой папки', 'Перемещение файла', 'Запрещение доступа', 'Дополнение файла', 'Изменение прав на комментирование'];
const results = ['Файл загружен', 'Доступ получен', 'Папка создана', 'Файл перемещен', 'Доступ запрещен', 'Доступ получен', 'Доступ изменен'];
const descriptions = ['Был загружен новый файл', 'Изменены права доступа на папку', 'Была создана новая папка', 'Файл был перемещен', 'Пользователь не имеет доступа к файлу', 'Пользователь может редактировать файл', 'Пользователь может писать комментарии к файлу'];
const objects = ['Документооборот компании 2019', 'Бухгалтерский отчет осень 2020', 'Секретные данные', 'Список сотрудников', 'Правила техники безопасности', 'Частозадаваемые вопросы (FAQ)', 'Лучшие сотрудники месяца', 'График проветривания помещений', 'Опись имущества на складе', 'Новые правила безопасности при COVID-19', 'Ценности компании', 'База данных о клиентах'];
const allPrivileges = ['Чтение', 'Изменение', 'Управление доспупом', 'Перемещение', 'Редактирование', 'Удаление', 'Комментирование'];
const femaleNames = ['Наталья', 'Ирина', 'Анна', 'Татьяна', 'Екатерина', 'Зинаида', 'Людмила', 'Мария', 'Анастасия', 'Кристина', 'Тамара', 'Светлана', 'Вера', 'Надежда', 'Любовь'];
const femaleSecondNames = ['Ивановна', 'Юрьевна', 'Николаевна', 'Михайловна', 'Алексеевна', 'Александровна', 'Кузьминична', 'Валентиновна', 'Семеновна', 'Витальевна', 'Тихоновна', 'Эдуардовна', 'Дмитриевна', 'Сергеевна', 'Павловна'];
const femaleSurnames = ['Барсукова', 'Сотрудникова', 'Менделеева', 'Ковалевская', 'Щекоткина', 'Друзь', 'Лебедева', 'Орлова', 'Кукушкина', 'Начальникова', 'Королева', 'Смельчакова', 'Чичикова', 'Петрова', 'Иванова'];
const maleNames = ['Эдуард', 'Олег', 'Юрий', 'Валерий', 'Иван', 'Павел', 'Кузьма', 'Станислав', 'Константин', 'Георгий', 'Николай', 'Лев', 'Владимир', 'Борис', 'Антон'];
const maleSecondNames = ['Егорович', 'Денисович', 'Львович', 'Ильич', 'Евгеньевич', 'Алексеевич', 'Александрович', 'Романович', 'Витальевич', 'Олегович', 'Николаевич', 'Семенович', 'Валерьевич', 'Юрьевич', 'Иванович'];
const maleSurnames = ['Кошкин', 'Романов', 'Хорошевский', 'Пирожков', 'Жуков', 'Кулебякин', 'Умников', 'Брейтенбихер', 'Авдеенко', 'Новиков', 'Поташев', 'Петров', 'Воробьев', 'Соколов', 'Сергеев'];

const randomGroupNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
};

const randomGenerator = (array) => {
    const randomPosition = Math.floor(Math.random() * array.length);
    return array[randomPosition];
};

const genderGenerator = () => {
    const gender = Math.floor(Math.random() * 2);
    return (gender === 0 ? 'male' : 'female');
};

const randomNameGenerator = (gender) => {
    if (gender === 'male') {
        return `${randomGenerator(maleSurnames)} ${randomGenerator(maleNames)} ${randomGenerator(maleSecondNames)}`;
    } else {
        return `${randomGenerator(femaleSurnames)} ${randomGenerator(femaleNames)} ${randomGenerator(femaleSecondNames)}`;
    }
};

const createObject = (num) => {
    const id = num + 1;
    const event = randomGenerator(events);
    const group = `Группа ${randomGroupNumber()}`;
    const result = results[events.indexOf(event)];
    const description = descriptions[events.indexOf(event)];
    const object = randomGenerator(objects);
    const privilegeChanger = randomNameGenerator(genderGenerator());
    const privilegeOwner = randomNameGenerator(genderGenerator());
    const privileges = allPrivileges.sort(() => Math.random() - Math.random()).slice(0, 3);
    const newObject = {
        'id': id,
        'event': event,
        'group': group,
        'result': result,
        'description': description,
        'object': object,
        'privilegeChanger': privilegeChanger,
        'privelegeOwner': privilegeOwner,
        'privileges': privileges
    };
    data.push(newObject);
};

for (let i = 0; i < numOfElements; i++) {
    createObject(i);
}

const jsonData = JSON.stringify(data);

fs.writeFileSync('generatedData.json', jsonData);