const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const HOTELS = [
  {
    id: "shams_resort",
    name: "Shams Resort & Spa",
    nameAr: "منتجع شمس وسبا",
    stars: 5,
    location: "Hurghada, Red Sea",
    code: "SH-RST",
    totalRooms: 340,
    accentColor: "#0ea5e9",
    floors: 5,
    roomsPerFloor: 12
  },
  {
    id: "shams_lodge",
    name: "Shams Lodge Water Sports",
    nameAr: "شمس لودج للرياضات المائية",
    stars: 4,
    location: "Safaga, Red Sea",
    code: "SH-LDG",
    totalRooms: 120,
    accentColor: "#0ea5e9",
    floors: 3,
    roomsPerFloor: 10
  },
  {
    id: "shams_imperial",
    name: "Shams Imperial Resort",
    nameAr: "شمس إمبريال ريزورت",
    stars: 5,
    location: "Soma Bay, Red Sea",
    code: "SH-IMP",
    totalRooms: 280,
    accentColor: "#6366f1",
    floors: 4,
    roomsPerFloor: 14
  },
  {
    id: "shams_prestige",
    name: "Shams Prestige Suites",
    nameAr: "شمس برستيج للأجنحة",
    stars: 5,
    location: "Abu Soma, Red Sea",
    code: "SH-PRS",
    totalRooms: 95,
    accentColor: "#f59e0b",
    floors: 3,
    roomsPerFloor: 8
  }
];

const DEPARTMENTS = [
  { id: "housekeeping", name: "Housekeeping", nameAr: "خدمة الغرف والنظافة", code: "HK", color: "text-emerald-400", slaMinutes: 15 },
  { id: "maintenance", name: "Maintenance & Engineering", nameAr: "الصيانة والأعطال", code: "ENG", color: "text-amber-400", slaMinutes: 20 },
  { id: "room_service", name: "In-Room Dining", nameAr: "الأغذية والمشروبات", code: "F&B", color: "text-rose-400", slaMinutes: 25 },
  { id: "front_desk", name: "Front Desk & Reception", nameAr: "الاستقبال والمكاتب الأمامية", code: "FD", color: "text-sky-400", slaMinutes: 10 },
  { id: "laundry", name: "Laundry & Dry Clean", nameAr: "المغسلة والكي", code: "LND", color: "text-indigo-400", slaMinutes: 45 },
  { id: "concierge", name: "Concierge & Tours", nameAr: "الاستعلامات والرحلات", code: "CON", color: "text-purple-400", slaMinutes: 30 }
];

const SERVICES = [
  { id: "srv_towels", name: "Extra Fresh Towels", nameAr: "مناشف إضافية نظيفة", category: "housekeeping", price: 0, isPaid: false, icon: "Sparkles", departmentId: "housekeeping" },
  { id: "srv_clean_room", name: "Full Room Cleaning", nameAr: "تنظيف وتعقيم الغرفة بالكامل", category: "housekeeping", price: 0, isPaid: false, icon: "Sparkles", departmentId: "housekeeping" },
  { id: "srv_pillows", name: "Extra Orthopedic Pillows", nameAr: "وسائد طبية إضافية", category: "housekeeping", price: 0, isPaid: false, icon: "Sparkles", departmentId: "housekeeping" },
  { id: "srv_water_bottles", name: "Mineral Water Bottles (Pack of 4)", nameAr: "مياه معدنية إضافية (4 زجاجات)", category: "housekeeping", price: 0, isPaid: false, icon: "Sparkles", departmentId: "housekeeping" },
  { id: "srv_dental_kit", name: "Dental & Shaving Kit", nameAr: "أدوات تنظيف الأسنان والحلاقة", category: "housekeeping", price: 0, isPaid: false, icon: "Sparkles", departmentId: "housekeeping" },
  
  { id: "srv_ac_cooling", name: "AC Not Cooling / Temperature Issue", nameAr: "التكييف لا يبرد / ضبط الحرارة", category: "maintenance", price: 0, isPaid: false, icon: "Wrench", departmentId: "maintenance" },
  { id: "srv_tv_remote", name: "TV / Satellite Receiver Issue", nameAr: "عطل بالتلفاز أو الرسيفر", category: "maintenance", price: 0, isPaid: false, icon: "Wrench", departmentId: "maintenance" },
  { id: "srv_safe_box", name: "Electronic Safe Box Locked/Battery", nameAr: "الخزنة الإلكترونية مغلقة / بطارية", category: "maintenance", price: 0, isPaid: false, icon: "Wrench", departmentId: "maintenance" },
  { id: "srv_plumbing", name: "Plumbing / Water Pressure Leak", nameAr: "تسريب مياه أو ضغط مياه ضعيف", category: "maintenance", price: 0, isPaid: false, icon: "Wrench", departmentId: "maintenance" },

  { id: "srv_espresso_croissant", name: "Double Espresso & Butter Croissant", nameAr: "دبل إسبريسو وكرواسون بالزبدة", category: "room_service", price: 8.5, isPaid: true, icon: "Utensils", departmentId: "room_service" },
  { id: "srv_club_sandwich", name: "Triple Decker Club Sandwich & Fries", nameAr: "كلوب ساندوتش وبطاطس مقرمشة", category: "room_service", price: 16.0, isPaid: true, icon: "Utensils", departmentId: "room_service" },
  { id: "srv_pizza_margherita", name: "Stone Baked Pizza Margherita", nameAr: "بيتزا مارجريتا نابولي", category: "room_service", price: 14.5, isPaid: true, icon: "Utensils", departmentId: "room_service" },
  { id: "srv_fresh_orange", name: "Fresh Squeezed Orange Juice (500ml)", nameAr: "عصير برتقال فريش طبيعي", category: "room_service", price: 6.0, isPaid: true, icon: "Utensils", departmentId: "room_service" },

  { id: "srv_laundry_express", name: "Express Wash & Steam Iron (Per Item)", nameAr: "غسيل ومكواة بخار سريع للقطعة", category: "laundry", price: 5.0, isPaid: true, icon: "Shirt", departmentId: "laundry" },
  { id: "srv_dry_clean_suit", name: "Luxury Suit Dry Clean & Packaging", nameAr: "دراي كلين لبدلة رجالي فاخرة", category: "laundry", price: 18.0, isPaid: true, icon: "Shirt", departmentId: "laundry" },

  { id: "srv_late_checkout", name: "Late Checkout Request (up to 3 PM)", nameAr: "طلب مغادرة متأخرة (حتى 3 عصراً)", category: "front_desk", price: 25.0, isPaid: true, icon: "Clock", departmentId: "front_desk" },
  { id: "srv_airport_transfer", name: "Private Airport Limousine Transfer", nameAr: "ليموزين خاص للنقل إلى المطار", category: "front_desk", price: 40.0, isPaid: true, icon: "Car", departmentId: "front_desk" },
  { id: "srv_wake_up_call", name: "Wake-Up Call Alert", nameAr: "خدمة الإيقاظ الهاتفي", category: "front_desk", price: 0, isPaid: false, icon: "Bell", departmentId: "front_desk" },

  { id: "srv_snorkeling_trip", name: "Giftun Island Snorkeling Boat Trip", nameAr: "رحلة يخت وسنوركلينج لجزيرة الجفتون", category: "concierge", price: 55.0, isPaid: true, icon: "Compass", departmentId: "concierge" },
  { id: "srv_desert_safari", name: "Sunset Quad Safari & Bedouin Dinner", nameAr: "سفاري بيتش باجي وعشاء بدوي", category: "concierge", price: 45.0, isPaid: true, icon: "Compass", departmentId: "concierge" }
];

const STAFF_MEMBERS = [
  { id: "staff_1", email: "hassan@shams.com", name: "Hassan Mahmoud", role: "supervisor", departmentId: "housekeeping", avatar: "HM" },
  { id: "staff_2", email: "youssef@shams.com", name: "Youssef Ibrahim", role: "staff", departmentId: "housekeeping", avatar: "YI" },
  { id: "staff_3", email: "tarek@shams.com", name: "Tarek Fathy", role: "supervisor", departmentId: "maintenance", avatar: "TF" },
  { id: "staff_4", email: "karim@shams.com", name: "Karim Adel", role: "staff", departmentId: "maintenance", avatar: "KA" },
  { id: "staff_5", email: "mina@shams.com", name: "Chef Mina Nabil", role: "staff", departmentId: "room_service", avatar: "MN" },
  { id: "staff_6", email: "nour@shams.com", name: "Nouran Gamal", role: "staff", departmentId: "front_desk", avatar: "NG" },
  { id: "staff_7", email: "admin@shams.com", name: "General Manager (Shams HQ)", role: "super_admin", departmentId: "front_desk", avatar: "GM" }
];

async function main() {
  console.log("🌱 Starting GSM Database Seeding...");

  // 1. Seed Hotels
  for (const h of HOTELS) {
    await prisma.hotel.upsert({
      where: { id: h.id },
      update: h,
      create: h
    });
  }
  console.log("✅ Seeded 4 Shams Hotels.");

  // 2. Seed Departments for each hotel
  for (const h of HOTELS) {
    for (const d of DEPARTMENTS) {
      const deptId = `${h.id}_${d.id}`;
      await prisma.department.upsert({
        where: { id: deptId },
        update: { ...d, id: deptId, hotelId: h.id },
        create: { ...d, id: deptId, hotelId: h.id }
      });
    }
  }
  console.log("✅ Seeded Departments across all hotels.");

  // 3. Seed Services for shams_resort
  for (const s of SERVICES) {
    const deptId = `shams_resort_${s.departmentId}`;
    await prisma.service.upsert({
      where: { id: s.id },
      update: {
        name: s.name,
        nameAr: s.nameAr,
        category: s.category,
        price: s.price,
        isPaid: s.isPaid,
        icon: s.icon,
        departmentId: deptId
      },
      create: {
        id: s.id,
        name: s.name,
        nameAr: s.nameAr,
        category: s.category,
        price: s.price,
        isPaid: s.isPaid,
        icon: s.icon,
        departmentId: deptId
      }
    });
  }
  console.log("✅ Seeded Services Catalog.");

  // 4. Seed Staff Users
  for (const st of STAFF_MEMBERS) {
    const deptId = `shams_resort_${st.departmentId}`;
    await prisma.staffUser.upsert({
      where: { id: st.id },
      update: {
        email: st.email,
        name: st.name,
        role: st.role,
        avatar: st.avatar,
        hotelId: "shams_resort",
        departmentId: deptId
      },
      create: {
        id: st.id,
        email: st.email,
        name: st.name,
        role: st.role,
        avatar: st.avatar,
        hotelId: "shams_resort",
        departmentId: deptId
      }
    });
  }
  console.log("✅ Seeded Staff Members & Super Admin.");

  // 5. Seed Rooms for Shams Resort (Floor 1-5, 12 rooms each)
  for (let f = 1; f <= 5; f++) {
    for (let r = 1; r <= 12; r++) {
      const roomNum = `${f}${String(r).padStart(2, "0")}`;
      const roomType = r % 3 === 0 ? "Sea View Suite" : r % 2 === 0 ? "Deluxe Double" : "Standard King";
      await prisma.room.upsert({
        where: {
          hotelId_number: {
            hotelId: "shams_resort",
            number: roomNum
          }
        },
        update: {
          floor: f,
          type: roomType,
          status: "clean"
        },
        create: {
          hotelId: "shams_resort",
          number: roomNum,
          floor: f,
          type: roomType,
          status: "clean"
        }
      });
    }
  }
  console.log("✅ Seeded 60 Rooms for Shams Resort.");

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
