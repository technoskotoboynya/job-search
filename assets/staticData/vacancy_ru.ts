import { WorkSchedule, EducationLevel, EmploymentType, Category, City, Currency, WorkExperience } from "~/types";
import type { IVacancy } from "~/types";

const data: IVacancy[] = [
    {
        id: 1,
        slug: "frontend-developer",
        title: "Программист Frontend",
        post: "Frontend Developer",
        category: Category.IT,
        from_salary: 2000,
        to_salary: 3000,
        currency: Currency.USD,
        company: "Tech Solutions",
        date_publish: "2025-01-18",
        info_vacancy: {
            job_format: WorkSchedule.REMOTE,
            education: EducationLevel.HIGHER,
            type_employment: EmploymentType.FULL_TIME,
            internship: false,
            work_experience: WorkExperience.ONE_TO_THREE_YEARS,
        },
        professional_skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        personal_skills: ["Коммуникабельность", "Ответственность", "Творческий подход"],
        city: City.ALMATY,
        address: "ул. Абая, 50",
    },
    {
        id: 2,
        slug: "sales-manager",
        title: "Менеджер по продажам",
        post: "Sales Manager",
        category: Category.SALES,
        from_salary: 350000,
        to_salary: null,
        currency: Currency.KZT,
        company: "Market Experts",
        date_publish: "2025-01-17",
        info_vacancy: {
            job_format: WorkSchedule.FULL_TIME,
            education: EducationLevel.SECONDARY,
            type_employment: EmploymentType.PART_TIME,
            internship: false,
            work_experience: WorkExperience.NO_EXPERIENCE,
        },
        professional_skills: ["Навыки продаж", "Переговоры", "Работа с клиентами"],
        personal_skills: ["Целеустремленность", "Гибкость", "Работа в команде"],
        city: City.ASTANA,
        address: "ул. Достык, 10",
    },
    {
        id: 3,
        slug: "truck-driver",
        title: "Водитель грузового автомобиля",
        post: "Truck Driver",
        category: Category.TRANSPORT,
        from_salary: 70000,
        to_salary: 100000,
        currency: Currency.RUB,
        company: "Logistics Corp",
        date_publish: "2025-01-16",
        info_vacancy: {
            job_format: WorkSchedule.ROTATIONAL,
            education: EducationLevel.SECONDARY,
            type_employment: EmploymentType.TEMPORARY,
            internship: false,
            work_experience: WorkExperience.THREE_TO_FIVE_YEARS,
        },
        professional_skills: ["Управление грузовым транспортом", "Знание ПДД", "Техническое обслуживание"],
        personal_skills: ["Внимательность", "Ответственность", "Стрессоустойчивость"],
        city: City.SHYMKENT,
        address: "ул. Байтурсынова, 25",
    },
    {
        id: 4,
        slug: "software-engineer",
        title: "Инженер-программист",
        post: "Software Engineer",
        category: Category.IT,
        from_salary: 2500,
        to_salary: 4000,
        currency: Currency.EUR,
        company: "Code Innovators",
        date_publish: "2025-01-15",
        info_vacancy: {
            job_format: WorkSchedule.FULL_TIME,
            education: EducationLevel.HIGHER,
            type_employment: EmploymentType.FULL_TIME,
            internship: false,
            work_experience: WorkExperience.FIVE_TO_SEVEN_YEARS,
        },
        professional_skills: ["C++", "Python", "Алгоритмы и структуры данных"],
        personal_skills: ["Аналитический склад ума", "Ответственность", "Умение работать в команде"],
        city: City.KARAGANDY,
        address: "ул. Казыбек би, 17",
    },
    {
        id: 5,
        slug: "graphic-designer",
        title: "Графический дизайнер",
        post: "Graphic Designer",
        category: Category.DESIGN,
        from_salary: 300000,
        to_salary: 500000,
        currency: Currency.KZT,
        company: "Design Studio",
        date_publish: "2025-01-14",
        info_vacancy: {
            job_format: WorkSchedule.FLEXIBLE,
            education: EducationLevel.VOCATIONAL,
            type_employment: EmploymentType.FREELANCE,
            internship: false,
            work_experience: WorkExperience.ONE_TO_THREE_YEARS,
        },
        professional_skills: ["Adobe Photoshop", "Illustrator", "Figma"],
        personal_skills: ["Креативность", "Коммуникабельность", "Работа в сжатые сроки"],
        city: City.AKTAU,
        address: "ул. Тауелсиздик, 12",
    },
    {
        id: 6,
        slug: "mathematics-teacher",
        title: "Учитель математики",
        post: "Mathematics Teacher",
        category: Category.EDUCATION,
        from_salary: 60000,
        to_salary: 90000,
        currency: Currency.RUB,
        company: "Education Hub",
        date_publish: "2025-01-13",
        info_vacancy: {
            job_format: WorkSchedule.FULL_TIME,
            education: EducationLevel.HIGHER,
            type_employment: EmploymentType.FULL_TIME,
            internship: false,
            work_experience: WorkExperience.ONE_TO_THREE_YEARS,
        },
        professional_skills: ["Преподавание", "Работа с детьми", "Методики обучения"],
        personal_skills: ["Терпение", "Коммуникабельность", "Ответственность"],
        city: City.TARAZ,
        address: "ул. Толе би, 18",
    },
    {
        id: 7,
        slug: "barista",
        title: "Бариста",
        post: "Barista",
        category: Category.SERVICE,
        from_salary: 8,
        to_salary: 10,
        currency: Currency.USD,
        company: "Coffee Lovers",
        date_publish: "2025-01-12",
        info_vacancy: {
            job_format: WorkSchedule.PART_TIME,
            education: EducationLevel.NONE,
            type_employment: EmploymentType.PART_TIME,
            internship: false,
            work_experience: WorkExperience.NO_EXPERIENCE,
        },
        professional_skills: ["Приготовление кофе", "Обслуживание клиентов"],
        personal_skills: ["Доброжелательность", "Работа в команде", "Энергичность"],
        city: City.KOSTANAY,
        address: "ул. Абылайхана, 7",
    },
    {
        id: 8,
        slug: "lawyer",
        title: "Юрист",
        post: "Lawyer",
        category: Category.LAW,
        from_salary: 500000,
        to_salary: 700000,
        currency: Currency.KZT,
        company: "Legal Aid Co.",
        date_publish: "2025-01-11",
        info_vacancy: {
            job_format: WorkSchedule.FULL_TIME,
            education: EducationLevel.MASTER,
            type_employment: EmploymentType.FULL_TIME,
            internship: false,
            work_experience: WorkExperience.THREE_TO_FIVE_YEARS,
        },
        professional_skills: ["Гражданское право", "Консультации", "Договорная работа"],
        personal_skills: ["Внимательность", "Организованность", "Дисциплинированность"],
        city: City.ASTANA,
        address: "ул. Иманова, 5",
    },
    {
        id: 9,
        slug: "hr-manager",
        title: "HR-менеджер",
        post: "HR Manager",
        category: Category.HR,
        from_salary: 2000,
        to_salary: 3500,
        currency: Currency.EUR,
        company: "Talent Seekers",
        date_publish: "2025-01-10",
        info_vacancy: {
            job_format: WorkSchedule.FULL_TIME,
            education: EducationLevel.HIGHER,
            type_employment: EmploymentType.FULL_TIME,
            internship: false,
            work_experience: WorkExperience.ONE_TO_THREE_YEARS,
        },
        professional_skills: ["Подбор персонала", "Адаптация сотрудников", "Организация мероприятий"],
        personal_skills: ["Коммуникабельность", "Ответственность", "Энергичность"],
        city: City.PETROPAVLOVSK,
        address: "ул. Ленина, 10",
    },
];

export const vacancy_ru: IVacancy[] = data;
