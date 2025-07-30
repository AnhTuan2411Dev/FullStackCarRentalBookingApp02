// Import các icon và hình ảnh
import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"

// Danh sách các thành phố tại Việt Nam
export const cityList = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Nha Trang', 'Huế', 'Vũng Tàu']

// Object chứa tất cả các assets (icon, hình ảnh)
export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4
}

// Định nghĩa interface cho menu link
interface MenuLink {
    name: string;
    path: string;
}

// Định nghĩa interface cho owner menu link
interface OwnerMenuLink {
    name: string;
    path: string;
    icon: string;
    coloredIcon: string;
}

// Menu chính của ứng dụng
export const menuLinks: MenuLink[] = [
    { name: "Trang chủ", path: "/" },
    { name: "Xe ô tô", path: "/cars" },
    { name: "Đặt xe của tôi", path: "/my-bookings" },
]

// Menu dành cho chủ xe
export const ownerMenuLinks: OwnerMenuLink[] = [
    { name: "Bảng điều khiển", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Thêm xe", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Quản lý xe", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Quản lý đặt xe", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

// Định nghĩa interface cho user data
interface UserData {
    _id: string;
    name: string;
    email: string;
    role: string;
    image: string;
}

// Dữ liệu người dùng mẫu
export const dummyUserData: UserData = {
    "_id": "6847f7cab3d8daecdb517095",
    "name": "Nguyễn Văn An",
    "email": "admin@example.com",
    "role": "owner",
    "image": user_profile,
}

// Định nghĩa interface cho car data
interface CarData {
    _id: string;
    owner: string;
    brand: string;
    model: string;
    image: string;
    year: number;
    category: string;
    seating_capacity: number;
    fuel_type: string;
    transmission: string;
    pricePerDay: number;
    location: string;
    description: string;
    isAvaliable: boolean;
    createdAt: string;
}

// Dữ liệu xe mẫu (chuyển đổi sang thị trường Việt Nam)
export const dummyCarData: CarData[] = [
    {
        "_id": "67ff5bc069c03d4e45f30b77",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image1,
        "year": 2020,
        "category": "SUV",
        "seating_capacity": 7,
        "fuel_type": "Xăng",
        "transmission": "Tự động",
        "pricePerDay": 1500000, // 1.5 triệu VND/ngày
        "location": "Hà Nội",
        "description": "BMW X5 là dòng SUV hạng sang cỡ trung được sản xuất bởi BMW. X5 ra mắt lần đầu vào năm 1999 là chiếc SUV đầu tiên được BMW sản xuất.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "67ff6b758f1b3684286a2a65",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Vios",
        "image": car_image2,
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 5,
        "fuel_type": "Xăng",
        "transmission": "Số sàn",
        "pricePerDay": 600000, // 600k VND/ngày
        "location": "Hồ Chí Minh",
        "description": "Toyota Vios là mẫu sedan hạng B phổ biến tại Việt Nam, tiết kiệm nhiên liệu và phù hợp cho việc di chuyển trong thành phố.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "67ff6b9f8f1b3684286a2a68",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Honda",
        "model": "CR-V",
        "image": car_image3,
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 7,
        "fuel_type": "Xăng",
        "transmission": "Tự động",
        "pricePerDay": 1200000, // 1.2 triệu VND/ngày
        "location": "Đà Nẵng",
        "description": "Honda CR-V là mẫu SUV 7 chỗ thực dụng, phù hợp cho gia đình với không gian rộng rãi và tính năng an toàn cao.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "68009c93a3f5fc6338ea7e34",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Hyundai",
        "model": "Accent",
        "image": car_image4,
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 5,
        "fuel_type": "Xăng",
        "transmission": "Tự động",
        "pricePerDay": 700000, // 700k VND/ngày
        "location": "Cần Thơ",
        "description": "Hyundai Accent là mẫu sedan hạng B với thiết kế hiện đại, trang bị tốt và mức giá hợp lý cho thuê xe.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];

// Định nghĩa interface cho booking data
interface BookingData {
    _id: string;
    car: CarData;
    user: string;
    owner: string;
    pickupDate: string;
    returnDate: string;
    status: string;
    price: number;
    createdAt: string;
}

// Dữ liệu đặt xe mẫu của tôi
export const dummyMyBookingsData: BookingData[] = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed", // đã xác nhận
        "price": 3000000, // 3 triệu VND (2 ngày BMW X5)
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending", // đang chờ
        "price": 600000, // 600k VND (1 ngày Toyota Vios)
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending", // đang chờ
        "price": 2400000, // 2.4 triệu VND (2 ngày Honda CR-V)
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed", // đã xác nhận
        "price": 1400000, // 1.4 triệu VND (2 ngày Hyundai Accent)
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

// Định nghĩa interface cho dashboard data
interface DashboardData {
    totalCars: number;
    totalBookings: number;
    pendingBookings: number;
    completedBookings: number;
    recentBookings: BookingData[];
    monthlyRevenue: number;
}

// Dữ liệu bảng điều khiển mẫu
export const dummyDashboardData: DashboardData = {
    "totalCars": 4, // tổng số xe
    "totalBookings": 4, // tổng số đặt xe
    "pendingBookings": 2, // đặt xe đang chờ
    "completedBookings": 2, // đặt xe đã hoàn thành
    "recentBookings": [ // đặt xe gần đây
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 7400000 // doanh thu tháng (7.4 triệu VND)
}
