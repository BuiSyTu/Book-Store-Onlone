const addRandomSach = () => {
    var book_md = require("./book");
    let tenSachArray = [
        "Rivers of London",
        "The Hanging Tree",
        "The Act of Roger Murgatroyd",
        "A Mysterious Affair of Style",
        "A Closed Book",
        "The Hitchhiker's Guide to the Galaxy series",
        " Doctor Who",
        " The Information",
        " London Fields",
        " Money",
        " The Blind Assassin",
        " Lady Oracle",
        " The Robber Bride",
        "Death and the Compass",
        "An Examination of the Work of Herbert Quain",
        "The Library of Babel",
        "Pierre Menard, Author of the Quixote",
        "Three Versions of Judas",
        "Tlön, Uqbar, Orbis Tertius",
        "The Zahir",
        "The Affair of the Second Goldfish",
        "The Body in the Library",
        "The Cat it Was Who Died",
        "The Clue of the Candle Wax",
        "Death of a Debutante",
        "Famous Crimes Passionnels",
        "The Lotus Murder",
        "Murder for Love v. Murder for Gain",
        "The Tendency of the Criminal",
        "The White Cockatoo",
        "The Woman in the Woods"
    ];
    let tacgiaArray = [
        "Ghanaian",
        "Greek",
        "Guatemalan",
        "Guyanese",
        "Hungarian",
        "Icelandic",
        "Indian",
        "Indonesian",
        "Iranian",
        "Irish",
        "Italian",
        "Ivorian",
        "Japanese",
        "Jamaican",
        "Kenyan",
        "Korean",
        "Latvian",
        "Lebanese",
        "Lithuanian",
        "Luxembourg",
        "Macedonian",
        "Malaysian",
        "Mexican",
        "Moroccan",
        "New Zealand",
        "Nicaraguan",
        "Nigerian"
    ];
    let namxbArray = [
        "2015",
        "2014",
        "2012",
        "2013",
        "2017",
        "2018",
        "2011",
        "2010",
        "2009",
        "2008"
    ];
    let nhaxbArray = [
        "Kim Đồng",
        "Công an nhân dân",
        "Thanh Niên",
        "Sân khấu",
        "Hội nhà văn",
        "Lao động xã hội",
        "Khoa học xã hội",
        "Tôn giáo",
        "Thông tấn",
        "Bản đồ",
        "Bưu điện",
        "Giao thông",
        "Khoa học và kỹ thuật"
    ];
    let soluongArray = [];
    let giaNhapArray = [];
    let giaBanArray = [];

    for (let i = 0; i < 40; i++) {
        for (let j = 1; j < 4; j++) {
            var SL = Math.floor((Math.random() + 1) * j * 100);
            var gianhap = Math.floor((Math.random() + 1) * j) * 50000;
            var giaban = gianhap * 1.33;
            soluongArray.push(SL);
            giaNhapArray.push(gianhap);
            giaBanArray.push(giaban);
        }
        // random thong tin sach
        let ma_sach = (i + 1).toString();
        let ma_the_loai = Math.floor(Math.random() * 7);
        let ten_sach = tenSachArray[getRandomInt(tenSachArray.length)];
        let tac_gia = tacgiaArray[getRandomInt(tacgiaArray.length)];
        let nha_xuat_ban = nhaxbArray[getRandomInt(nhaxbArray.length)];
        let nam_xuat_ban = namxbArray[getRandomInt(namxbArray.length)];
        let so_luong = soluongArray[getRandomInt(soluongArray.length)];
        let gia_nhap = giaNhapArray[getRandomInt(giaNhapArray.length)];
        let gia_ban = giaBanArray[getRandomInt(giaBanArray.length)];

        var sach = {
            ma_sach,
            ma_the_loai,
            ten_sach,
            tac_gia,
            nha_xuat_ban,
            nam_xuat_ban,
            so_luong,
            gia_nhap,
            gia_ban
        };
        // console.log(sach);
        book_md
            .addBook(sach)
            .then(function () {
                // console.log("success");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
};

const addRandomUser = () => {
    // du lieu nguoi dung
    var user_md = require("./users");
    let ho_ten_array = [
        "Bùi Kim Quyê",
        "Võ An Phước Thiện",
        "Phạm Nguyễn QuỳnhTrân",
        "Dương Hoài Phương",
        "Phan Vinh Bính",
        "Võ Minh Thư ",
        "Phan Huỳnh Ngọc Dung ",
        "Nguyễn Vân Anh",
        "Nguyễn Thế Vin",
        "Nguyen Thi Thanh Bíc",
        "Lê Minh Vương ",
        "nguyễn thiện toàn",
        " Trương Gia Mẫn ",
        "Vương Thu Hiề",
        "Châu Thị Kim An",
        "Trần NGọc Trang",
        "huynh minh",
        "Cao Minh Hiền",
        "Ta thị thanh tuye",
        "Võ Thị Tuyết Vân ",
        " Mai Khánh Vân",
        "Đoàn Thị Mỹ Xuân ",
        "Doãn Phan Trung Hải ",
        "Lâm Ngọc Linh ",
        "Nguyễn Minh Châu",
        "Nguyễn Thạch Gian",
        "Võ tường duy  ",
        "Trần Thị Kim  Ngâ",
        "Huỳnh Kim Hoàng",
        "Nguyễn Phước Uyên Thư",
        "Lê Trung Kiên ",
        "Sity- HaChar ",
        "Kiều Hồng Tran",
        "Le Thi Hong Khanh ",
        "Phạm Văn Đồng ",
        "Lê Thị Lệ Thủy",
        "Trương Yến Thanh ",
        " Trần Thị Cẩm Tiê",
        "Huỳnh Thị Ngọc Thảo ",
        "Đào Duy Toàn ",
        "Nguyễn Thùy Như Quỳnh ",
        "Ngô Phạm Thanh Trúc",
        "Trần Phan Bảo Thu",
        "Phạm Ngọc Thảo Vi  ",
        "Phan Vũ Minh Quyền ",
        "Trần Phan Bảo Anh ",
        "Phạm Hoàng Nam Trung ",
        "Nguyễn Văn Khải",
        "Trương Hoài Thuận ",
        "Trương Thị Bích Ngọ",
        "Khưu Minh Trường ",
        "Đỗ Nguyễn Nhất Anh",
        "Đặng Thị Thủy Tiên ",
        "Dương phạm Thuỳ an ",
        "Hồ Thị Bích Ngọ",
        "Vũ Ngọc Vân Khanh ",
        "Đặng Như Ngọc",
        "Bùi Duy Quang ",
        "Nguyễn Huỳnh Thanh Hiền",
        "Huỳnh Khánh Duy",
        "Nguyễn Đình Đức",
        "Lê Nguyễn Kim Ngọ",
        " Ngô Nguyệt An ",
        "ngo kim dun",
        "Ngô Cao Sơn",
        "Lê Thị Thùy Liê",
        " Trần Châu Bảo Ngọc ",
        " Nguyễn Mai Lê ",
        "Võ Việt Hản ",
        "Lục Kim Ngọc ",
        "Ngô Hồng Nhung ",
        "Lê Hồng Phúc",
        "Lu Kim Hoà",
        "Huỳnh Phạm Ngọc Thảo",
        "Cai Huỳnh Trúc Vy ",
        "Phan Hữu Sơn CA",
        "Nhâm Bá D",
        "Nguyen Minh Thuy",
        " Nguyễn Hữu Bảo Thơ",
        "Đinh Thị Hồng Vân",
        "Đinh Thị Hoa",
        "Nguyễn Tấn Thành",
        "Lương Hòa Nhân  ",
        "Nguyễn Thuỳ Linh ",
        "Nguyễn Thị Huyền Trâ",
        "Lê Thị Ngọc Hoa ",
        "lê thị diễm hươn",
        "Vũ Thị Hoàng Quyên ",
        "Lê Minh Huy",
        "Bùi Thị Ngọc Điệp",
        "Trần Doanh  ",
        "Nguyễn Trang Oanh ",
        "Lê Hồ Minh Trâm ",
        "Trần Khải Huy ",
        "Lê Thùy Trúc Ly ",
        "Lê Hàn Uyên ",
        "Nguyễn Lê Hoàng Phương ",
        "Nguyễn Thị Thúy A",
        "Lê Hạ La",
        "Ngô Thanh Hà"
    ];
    let dia_chi_array = [
        "An Giang",
        "Bà Rịa - Vũng Tàu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bạc Liêu",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Định",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cao Bằng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang"
    ];
    let sdt_array = [
        "0386156927",
        "0338243407",
        "0336721124",
        "0334648300",
        "0363604811",
        "0373250653",
        "0865428930",
        "0329682776",
        "0867565024",
        "0393021143",
        "0868970174",
        "0865467531",
        "0867708331"
    ];
    let ngay_sinh_array = [];
    let gioi_tinh_array = ["Nam", "Nữ"];

    // du lieu tai khoan
    let email_array = [
        "pinwheel_of_love.1823@gmail.com",
        "sacvn@gmail.com",
        "mamnonbuuhoa@gmail.com",
        "hoangdangphatco@gmail.com",
        "info@datngoc.com.vn",
        "doanxd.fr@gmail.com",
        "seo46@vnpec.com.vn",
        "example@example.com",
        "thanhtrung_ncm@gmail.com",
        "nguyenquocaic13@gmail.com",
        "bestmix@gmail.com",
        "daiviethoanggroup@gmail.com",
        "vanphuocfuneral@gmail.com",
        "angkor@gmail.com",
        "info@gmail.com",
        "reservation@gmail.com",
        "reservation@gmail.com",
        "yvesbou-caret@gmail.com",
        "fidi@gmail.com",
        "saigontourist@gmail.com",
        "xacnhan@gmail.com",
        "chienhoangduc@gmail.com",
        "nguyenhien.viboss@gmail.com",
        "toilahung84@gmail.com",
        "dnbien10091986@gmail.com",
        "vantotvo.yp@gmail.com",
        "ks.thnguyen@gmail.com",
        "hieunv731@wru.vn",
        "vandung159@gmail.com",
        "lakhigiotnuocmatnheroi@gmail.com",
        "k30x1bd@gmail.com",
        "dodozozoo@gmail.com",
        "namk47@gmail.com",
        "dainam_27@ggmail.com",
        "letuanemcdk8@gmail.com",
        "mrzintub@gmail.com",
        "quanghungtc07x1@gmail.com",
        "webmaster@gmail.com",
        "xaydung@gmail.com",
        "dhdongdo@gmail.com",
        "cnthongtin@gmail.com",
        "khoacoban@gmail.com",
        "cnmoitruong@gmail.com",
        "qtkinhdoanh@gmail.com",
        "dtvienthong@gmail.com",
        "qhquocte@gmail.com",
        "ngoaingu@gmail.com",
        "kientruc@gmail.com",
        "tcnganhang@gmail.com",
        "thongtinhoc@gmail.com",
        "khoamacle@gmail.com",
        "dulich@gmail.com",
        "ngdaotao.ddd@gmail.com",
        "phongdaotao.ddd@gmail.com",
        "dangnh09@gmail.com",
        "xvinhnh@gmail.com",
        "caohoptuan@gmail.com",
        "ngdo@gmail.com",
        "cntt.dongdo@gmail.com",
        "ng.tt@gmail.com",
        "phuong.tt@gmail.com",
        "nguyen.ntb@gmail.com"
    ];
    let tai_khoan_array = [];
    let mat_khau_array = [];
    let quyen_su_dung_array = ["user", "admin", "thu_kho", "ke_toan"];

    // random import ngay_sinh_array, tai_khoan_array
    for (let i = 0; i < 40; i++) {
        // push ngay_sinh_array
        ngay_sinh_array.push(getRandomDate());

        // push tai_khoan_array, mat_khau_array voi do dai string truyen vao ham getRandomString
        tai_khoan_array.push(getRandomString());
        mat_khau_array.push(getRandomString());
    }

    for (let i = 0; i < 40; i++) {
        // doi tuong tai khoan
        let tai_khoan_table = {
            ma_tai_khoan: i + 1,
            tai_khoan: tai_khoan_array[getRandomInt(tai_khoan_array.length)],
            mat_khau: mat_khau_array[getRandomInt(mat_khau_array.length)],
            quyen_su_dung: quyen_su_dung_array[getRandomInt(quyen_su_dung_array.length)]
        };

        // doi tuong nguoi dung, cần import database bảng tài khoản trươc
        // do ma_tai_khoan bảng nguoi_dung là khoá ngoài tham chiếu tới bảng tai_khoan
        let nguoi_dung_table = {
            ma_tai_khoan: i + 1,
            ho_ten: ho_ten_array[getRandomInt(ho_ten_array.length)],
            dia_chi: dia_chi_array[getRandomInt(dia_chi_array.length)],
            sdt: sdt_array[getRandomInt(sdt_array.length)],
            ngay_sinh: ngay_sinh_array[getRandomInt(ngay_sinh_array.length)],
            gioi_tinh: gioi_tinh_array[getRandomInt(gioi_tinh_array.length)],
            email: email_array[getRandomInt(email_array.length)]
        };

        const user_md = require("./users");
        user_md
            .addAccount(tai_khoan_table)
            .then(() => {
                user_md
                    .addUser(nguoi_dung_table)
                    .then(() => {})
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }
};

const getRandomInt = length => {
    return Math.floor(Math.random() * length);
};

// return date string random
getRandomDate = () => {
    // can install pakage dateformat
    // cau lenh npm install dateformat --save
    // format date
    var dateFormat = require("dateformat");

    let start = new Date(1950, 1, 1);
    let end = new Date();
    let date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    let dateString = dateFormat(date, "yyyy-mm-dd");
    return dateString;
};

// return 1 string voi do dai ngau nhien dc nguoi dung truyen vao
// chỉ random đc string co độ dài 5 trở xuống
// chi tiết: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const getRandomString = () => {
    return Math.random()
        .toString(36)
        .substring(7);
};

module.exports = {
    addRandomSach: addRandomSach,
    addRandomUser: addRandomUser
};