// Britech Computers product catalogue
// Exchange rate used for display: KSh 130 = USD 1. Update USD_RATE when needed.
const USD_RATE = 130;
const WHATSAPP_NUMBER = "254726609809";

const products = [
  // EX-UK iPhones — prices updated with the additional KSh 10,000
  {name:"iPhone 12 Pro 256GB",brand:"Apple",category:"iPhone",price:49000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 12 Pro Max 256GB",brand:"Apple",category:"iPhone",price:59000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 13 256GB",brand:"Apple",category:"iPhone",price:51000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1632633173522-5cb2b3b4b1d1?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 14 128GB",brand:"Apple",category:"iPhone",price:53000,specs:"128GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 13 Pro 256GB",brand:"Apple",category:"iPhone",price:63000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1632633173522-5cb2b3b4b1d1?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 13 Pro Max 256GB",brand:"Apple",category:"iPhone",price:72000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 14 Pro 256GB",brand:"Apple",category:"iPhone",price:77000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=85"},
  {name:"iPhone 14 Pro Max 256GB",brand:"Apple",category:"iPhone",price:85000,specs:"256GB storage • Battery health from 90% • EX-UK",fresh:true,image:"https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&w=800&q=85"},

  // Laptops from the supplied stock list
  {name:"HP 15 Core i7 15th Gen",brand:"HP",category:"Laptop",price:110000,specs:"16GB RAM • 512GB SSD • Touchscreen • Brand new",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"NEC Celeron x360 Tablet",brand:"NEC",category:"Laptop",price:15000,specs:"Celeron • 4GB RAM • 64GB • x360 touchscreen",fresh:true,image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85"},
  {name:"HP Dragonfly 13",brand:"HP",category:"Laptop",price:51000,specs:"Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Microsoft Surface Pro 3",brand:"Microsoft",category:"Laptop",price:38000,specs:"Core i7 10th Gen • 16GB RAM • 256GB • Touch",fresh:false,image:"https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 15 AMD A6",brand:"HP",category:"Laptop",price:30000,specs:"AMD A6 • 4GB RAM • 512GB storage",fresh:false,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 820 G3",brand:"HP",category:"Laptop",price:30000,specs:"Core i5 6th Gen • 8GB RAM • 256GB SSD • Touch",fresh:false,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP Elite x2 Core m3",brand:"HP",category:"Laptop",price:34000,specs:"Core m3 7th Gen • 8GB RAM • 256GB • Detachable",fresh:true,image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85"},
  {name:"HP Elite x2 1013 G3",brand:"HP",category:"Laptop",price:41000,specs:"Core i7 8th Gen • 8GB RAM • 256GB • Detachable",fresh:true,image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1030 G7 Core i7",brand:"HP",category:"Laptop",price:56000,specs:"Core i7 10th Gen • 16GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1030 G3 Core i7",brand:"HP",category:"Laptop",price:49000,specs:"Core i7 8th Gen • 16GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1030 G3 Core i5",brand:"HP",category:"Laptop",price:48000,specs:"Core i5 8th Gen • 16GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1030 G2",brand:"HP",category:"Laptop",price:40000,specs:"Core i5 7th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1040 G7",brand:"HP",category:"Laptop",price:50000,specs:"Core i5 10th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 1040 G8",brand:"HP",category:"Laptop",price:70000,specs:"Core i7 11th Gen • 32GB RAM • 512GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 830 G8",brand:"HP",category:"Laptop",price:60000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 830 G5",brand:"HP",category:"Laptop",price:35000,specs:"Core i5 8th Gen • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 830 G10",brand:"HP",category:"Laptop",price:60000,specs:"Core i5 13th Gen • 16GB RAM • 256GB SSD • x360 non-touch",fresh:false,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 840 G9",brand:"HP",category:"Laptop",price:68000,specs:"Core i7 12th Gen • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 840 G8",brand:"HP",category:"Laptop",price:55000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • Touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 840 G10",brand:"HP",category:"Laptop",price:72000,specs:"Core i7 13th Gen • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 850 G8",brand:"HP",category:"Laptop",price:58000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • 15-inch touch",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 860 G10",brand:"HP",category:"Laptop",price:75000,specs:"Core i7 13th Gen • 16GB RAM • 512GB SSD • 16-inch",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP EliteBook 640 G10",brand:"HP",category:"Laptop",price:62000,specs:"Core i5 13th Gen • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"HP ProBook 445 G7 Ryzen 7",brand:"HP",category:"Laptop",price:38000,specs:"Ryzen 7 • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP ProBook 440 G9",brand:"HP",category:"Laptop",price:46000,specs:"Core i5 12th Gen • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP ZBook 14 G8",brand:"HP",category:"Laptop",price:65000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • 4GB NVIDIA T500",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP ZBook 15 G8",brand:"HP",category:"Laptop",price:73000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • 4GB NVIDIA T500",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"HP ZBook Firefly 16 G11",brand:"HP",category:"Laptop",price:100000,specs:"Intel Ultra 7 165U • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 7320 Core i7",brand:"Dell",category:"Laptop",price:39000,specs:"Core i7 11th Gen • 16GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 7420 2-in-1",brand:"Dell",category:"Laptop",price:46000,specs:"Core i7 11th Gen • 16GB RAM • 512GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 5330",brand:"Dell",category:"Laptop",price:51000,specs:"Core i7 12th Gen • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 5320",brand:"Dell",category:"Laptop",price:37000,specs:"Core i5 11th Gen • 16GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 5310",brand:"Dell",category:"Laptop",price:30000,specs:"Core i5 10th Gen • 8GB RAM • 256GB SSD • Touch",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Precision 5530",brand:"Dell",category:"Laptop",price:50000,specs:"Core i7 8th Gen • 8GB RAM • 256GB SSD • 4GB NVIDIA T1000",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Precision 5520",brand:"Dell",category:"Laptop",price:41000,specs:"Core i7 6th Gen • 8GB RAM • 256GB SSD • 4GB P1000",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 5410",brand:"Dell",category:"Laptop",price:34000,specs:"Core i7 10th Gen • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 5400",brand:"Dell",category:"Laptop",price:26000,specs:"Core i5 8th Gen • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Dell Latitude 3420",brand:"Dell",category:"Laptop",price:32000,specs:"Core i3 11th Gen • 8GB RAM • 256GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo ThinkBook 15",brand:"Lenovo",category:"Laptop",price:37000,specs:"Core i5 10th Gen • 8GB RAM • 256GB SSD",fresh:false,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo X1 Yoga 11th Gen",brand:"Lenovo",category:"Laptop",price:67000,specs:"Core i7 11th Gen • 32GB RAM • 512GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo X13 Core i5",brand:"Lenovo",category:"Laptop",price:33000,specs:"Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo X380 Yoga",brand:"Lenovo",category:"Laptop",price:32000,specs:"Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo X390 Yoga Core i7",brand:"Lenovo",category:"Laptop",price:37000,specs:"Core i7 8th Gen • 8GB RAM • 256GB SSD • x360 touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo P52",brand:"Lenovo",category:"Laptop",price:48000,specs:"Core i7 8th Gen • 8GB RAM • 256GB SSD • 4GB NVIDIA P2000",fresh:true,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo T480",brand:"Lenovo",category:"Laptop",price:33000,specs:"Core i7 8th Gen • 8GB RAM • 256GB SSD • Non-touch",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"Lenovo X1 Carbon Core i7",brand:"Lenovo",category:"Laptop",price:52000,specs:"Core i7 10th Gen • 16GB RAM • 512GB SSD",fresh:true,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"},
  {name:"MacBook Pro M1 2021 16-inch",brand:"Apple",category:"Laptop",price:145000,specs:"Apple M1 Pro • 16GB unified memory • 1TB SSD • 16-inch",fresh:true,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"},
  {name:"MacBook Pro M1 2021 16-inch",brand:"Apple",category:"Laptop",price:133000,specs:"Apple M1 Pro • 16GB unified memory • 512GB SSD • 16-inch",fresh:false,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"},
  {name:"MacBook Pro 2019 A1990",brand:"Apple",category:"Laptop",price:61000,specs:"Core i7 • 16GB RAM • 256GB SSD • Touch Bar • Radeon 4GB",fresh:true,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"},
  {name:"MacBook Pro M2 2022 13-inch",brand:"Apple",category:"Laptop",price:125000,specs:"Apple M2 • 16GB memory • 512GB SSD • Touch Bar",fresh:true,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"},
  {name:"MacBook Air M3 2024 15-inch",brand:"Apple",category:"Laptop",price:170000,specs:"Apple M3 • 16GB memory • 1TB SSD • 15-inch",fresh:false,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85"},

  {name:'HP EliteBook 1030 G3 Core i5 8GB',brand:'HP',category:"Laptop",price:45000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 1030 G7 Core i7 512GB',brand:'HP',category:"Laptop",price:59000,specs:'Core i7 10th Gen • 16GB RAM • 512GB SSD • x360 touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 1030 G7 Core i7 256GB',brand:'HP',category:"Laptop",price:57000,specs:'Core i7 10th Gen • 16GB RAM • 256GB SSD • x360 touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 1030 G7 Core i5',brand:'HP',category:"Laptop",price:50000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 1040 G5',brand:'HP',category:"Laptop",price:44000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 1040 G6',brand:'HP',category:"Laptop",price:47000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 830 G8 Core i5',brand:'HP',category:"Laptop",price:42000,specs:'Core i5 11th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 830 G6 Core i7',brand:'HP',category:"Laptop",price:45000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 830 G6 Core i5',brand:'HP',category:"Laptop",price:42000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 830 G7 Core i5 Touch',brand:'HP',category:"Laptop",price:45000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD • x360 touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 830 G7 Core i5 Non-Touch',brand:'HP',category:"Laptop",price:39000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G5 Core i5',brand:'HP',category:"Laptop",price:35000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G4',brand:'HP',category:"Laptop",price:32000,specs:'Core i5 7th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G5 Core i7',brand:'HP',category:"Laptop",price:39000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G8 Core i5',brand:'HP',category:"Laptop",price:42000,specs:'Core i5 11th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G7',brand:'HP',category:"Laptop",price:39000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G10 Core i5',brand:'HP',category:"Laptop",price:60000,specs:'Core i5 13th Gen • 8GB RAM • 256GB SSD • Non-touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G8 Core i7 Non-Touch',brand:'HP',category:"Laptop",price:53000,specs:'Core i7 11th Gen • 16GB RAM • 512GB SSD • Non-touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 840 G1',brand:'HP',category:"Laptop",price:27000,specs:'Core i7 4th Gen • 8GB RAM • 256GB SSD • No camera',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 850 G4',brand:'HP',category:"Laptop",price:35000,specs:'Core i7 7th Gen • 8GB RAM • 256GB SSD • 15-inch touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 860 G9',brand:'HP',category:"Laptop",price:70000,specs:'Core i7 12th Gen • 16GB RAM • 512GB SSD • 16-inch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 630 G10',brand:'HP',category:"Laptop",price:68000,specs:'Core i7 13th Gen • 16GB RAM • 512GB SSD • Touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 640 G10 256GB',brand:'HP',category:"Laptop",price:58000,specs:'Core i5 13th Gen • 16GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP EliteBook 640 G9',brand:'HP',category:"Laptop",price:55000,specs:'Core i5 12th Gen • 16GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 640 G5',brand:'HP',category:"Laptop",price:31000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 640 G5 Touch',brand:'HP',category:"Laptop",price:32000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • Touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 650 G1',brand:'HP',category:"Laptop",price:25000,specs:'Core i5 4th Gen • 8GB RAM • 256GB SSD • 15-inch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 440 G5',brand:'HP',category:"Laptop",price:31000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 640 G2',brand:'HP',category:"Laptop",price:28000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 440 G7',brand:'HP',category:"Laptop",price:39000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD • 2GB graphics',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 440 G8',brand:'HP',category:"Laptop",price:40000,specs:'Core i5 11th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 630 G8',brand:'HP',category:"Laptop",price:41000,specs:'Core i5 11th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ProBook 430 G7',brand:'HP',category:"Laptop",price:39000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook Studio G5',brand:'HP',category:"Laptop",price:68000,specs:'Core i7 8th Gen • 16GB RAM • 512GB SSD • 4GB NVIDIA P2000 • x360 touch • 15-inch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook X2 G4',brand:'HP',category:"Laptop",price:43000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Detachable',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook 15 G8 No Graphics',brand:'HP',category:"Laptop",price:58000,specs:'Core i7 11th Gen • 16GB RAM • 512GB SSD • No dedicated graphics • 15-inch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook 14 G8 No Graphics',brand:'HP',category:"Laptop",price:60000,specs:'Core i7 11th Gen • 16GB RAM • 512GB SSD • No dedicated graphics',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook 14u G6',brand:'HP',category:"Laptop",price:38000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook 14 G7',brand:'HP',category:"Laptop",price:50000,specs:'Core i7 10th Gen • 16GB RAM • 256GB SSD • No dedicated graphics',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'HP ZBook 14 G6 Touch',brand:'HP',category:"Laptop",price:45000,specs:'Core i7 8th Gen • 16GB RAM • 256GB SSD • Touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7390',brand:'Dell',category:"Laptop",price:30000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5300 Core i7',brand:'Dell',category:"Laptop",price:30000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7480 Core i7',brand:'Dell',category:"Laptop",price:30000,specs:'Core i7 7th Gen • 8GB RAM • 256GB SSD • Touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7480 Core i5',brand:'Dell',category:"Laptop",price:23000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7280',brand:'Dell',category:"Laptop",price:24000,specs:'Core i5 7th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7400 Core i7',brand:'Dell',category:"Laptop",price:30000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7320 Core i5',brand:'Dell',category:"Laptop",price:32000,specs:'Core i5 11th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7490',brand:'Dell',category:"Laptop",price:27000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7400 Core i5',brand:'Dell',category:"Laptop",price:27000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7520',brand:'Dell',category:"Laptop",price:40000,specs:'Core i5 11th Gen • 16GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7530',brand:'Dell',category:"Laptop",price:49000,specs:'Core i5 12th Gen • 32GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 7300',brand:'Dell',category:"Laptop",price:26000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Precision 5440',brand:'Dell',category:"Laptop",price:68000,specs:'Core i9 9th Gen • 8GB RAM • 256GB SSD • 4GB NVIDIA T2000',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Precision 5520 11th Gen',brand:'Dell',category:"Laptop",price:47000,specs:'Core i7 11th Gen • 8GB RAM • 256GB SSD • 15-inch',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5290',brand:'Dell',category:"Laptop",price:24000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5310 Core i7',brand:'Dell',category:"Laptop",price:34000,specs:'Core i7 10th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5300 Core i7 27K',brand:'Dell',category:"Laptop",price:27000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5400 Core i7',brand:'Dell',category:"Laptop",price:27000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5410 Core i5',brand:'Dell',category:"Laptop",price:27000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5490',brand:'Dell',category:"Laptop",price:27000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5550',brand:'Dell',category:"Laptop",price:22000,specs:'Core i7 5th Gen • 8GB RAM • 256GB SSD • 15-inch',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5410 Touch',brand:'Dell',category:"Laptop",price:32000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD • Touchscreen',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 5290 2-in-1',brand:'Dell',category:"Laptop",price:26000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • Detachable touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 3450',brand:'Dell',category:"Laptop",price:24000,specs:'Core i5 5th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Dell Latitude 3580',brand:'Dell',category:"Laptop",price:23000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo Tablet Core i5 Detachable',brand:'Lenovo',category:"Laptop",price:27000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • Detachable',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo Tablet Core i7 Detachable',brand:'Lenovo',category:"Laptop",price:29000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Detachable',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo L480',brand:'Lenovo',category:"Laptop",price:26000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo L470',brand:'Lenovo',category:"Laptop",price:25000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X395',brand:'Lenovo',category:"Laptop",price:26500,specs:'Ryzen 5 • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X13 Core i5 16GB',brand:'Lenovo',category:"Laptop",price:37000,specs:'Core i5 8th Gen • 16GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X380 Yoga Core i7',brand:'Lenovo',category:"Laptop",price:37000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X390 Yoga Core i5',brand:'Lenovo',category:"Laptop",price:33000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo L390 Yoga',brand:'Lenovo',category:"Laptop",price:32000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X13 Core i5 10th Gen 16GB',brand:'Lenovo',category:"Laptop",price:41000,specs:'Core i5 10th Gen • 16GB RAM • 512GB SSD • x360 touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X13 Core i5 10th Gen 8GB',brand:'Lenovo',category:"Laptop",price:39000,specs:'Core i5 10th Gen • 8GB RAM • 512GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo L13 Yoga',brand:'Lenovo',category:"Laptop",price:36000,specs:'Core i5 10th Gen • 8GB RAM • 256GB SSD • x360 touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo Yoga 12',brand:'Lenovo',category:"Laptop",price:24000,specs:'Core i5 4th Gen • 8GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Yoga Core i5 7th Gen',brand:'Lenovo',category:"Laptop",price:36000,specs:'Core i5 7th Gen • 16GB RAM • 256GB SSD • x360 touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Yoga Core i5 8th Gen',brand:'Lenovo',category:"Laptop",price:36000,specs:'Core i5 8th Gen • 8GB RAM • 256GB SSD • x360 touch • Stylus pen',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Yoga Core i5 10th Gen',brand:'Lenovo',category:"Laptop",price:42000,specs:'Core i5 10th Gen • 16GB RAM • 256GB SSD • x360 touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo W540',brand:'Lenovo',category:"Laptop",price:27000,specs:'Core i7 4th Gen • 8GB RAM • 256GB SSD • 2GB graphics • 15.6-inch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo T480s',brand:'Lenovo',category:"Laptop",price:34000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Non-touch',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo T570',brand:'Lenovo',category:"Laptop",price:29000,specs:'Core i7 6th Gen • 8GB RAM • 256GB SSD • 15-inch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo T460s',brand:'Lenovo',category:"Laptop",price:25000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo T440p',brand:'Lenovo',category:"Laptop",price:22000,specs:'4th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo T470',brand:'Lenovo',category:"Laptop",price:24000,specs:'Core i5 6th Gen • 8GB RAM • 500GB storage',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Carbon Core i7 8th Gen',brand:'Lenovo',category:"Laptop",price:37000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Non-touch',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo Carbon Core i5 6th Gen',brand:'Lenovo',category:"Laptop",price:28000,specs:'Core i5 6th Gen • 8GB RAM • 256GB SSD',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Carbon Core i5 5th Gen',brand:'Lenovo',category:"Laptop",price:25000,specs:'Core i5 5th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Carbon Core i5 4th Gen',brand:'Lenovo',category:"Laptop",price:24000,specs:'Core i5 4th Gen • 8GB RAM • 256GB SSD',fresh:true,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'Lenovo X1 Carbon Core i7 Touch',brand:'Lenovo',category:"Laptop",price:40000,specs:'Core i7 8th Gen • 8GB RAM • 256GB SSD • Touchscreen',fresh:false,image:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85'},
  {name:'MacBook Pro M1 2020 13-inch',brand:'Apple',category:"Laptop",price:110000,specs:'Apple M1 • 16GB memory • 512GB SSD • Touch Bar • 13-inch',fresh:false,image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85'},
  {name:'MacBook Air 2017',brand:'Apple',category:"Laptop",price:40000,specs:'Core i5 • 8GB RAM • 256GB SSD • 13-inch',fresh:false,image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85'},

  // Accessories
  {name:"Laptop sleeve zipped 14-inch",brand:"Accessories",category:"Accessory",price:600,specs:"Zipped protective sleeve • 14-inch",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"},
  {name:"Laptop sleeve normal 14-inch",brand:"Accessories",category:"Accessory",price:350,specs:"Protective laptop sleeve • 14-inch",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"},
  {name:"Laptop bags",brand:"Accessories",category:"Accessory",price:800,specs:"Laptop carrying bags • Prices start from",fresh:false,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 1040 G3 backlit keyboard",brand:"Accessories",category:"Accessory",price:2500,specs:"Replacement backlit keyboard",fresh:false,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 840 G3 backlit keyboard",brand:"Accessories",category:"Accessory",price:2500,specs:"Replacement backlit keyboard",fresh:false,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 840 G5 backlit keyboard",brand:"Accessories",category:"Accessory",price:2500,specs:"Replacement backlit keyboard",fresh:false,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 840 G3 battery",brand:"Accessories",category:"Accessory",price:2200,specs:"Replacement laptop battery",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 820 G2/G1 battery",brand:"Accessories",category:"Accessory",price:2000,specs:"Replacement laptop battery",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 1040 G3 replacement battery",brand:"Accessories",category:"Accessory",price:2500,specs:"Replacement laptop battery",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"},
  {name:"HP 840 G1/G2 battery",brand:"Accessories",category:"Accessory",price:2000,specs:"Replacement laptop battery",fresh:false,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=85"}
];

const money = value => "KSh " + value.toLocaleString("en-KE");
const usd = value => "$" + (value / USD_RATE).toLocaleString("en-US", {maximumFractionDigits:0});
const grid = document.getElementById("productGrid");
const search = document.getElementById("searchInput");
const category = document.getElementById("categoryFilter");
const brand = document.getElementById("brandFilter");
const sort = document.getElementById("sortFilter");
const empty = document.getElementById("emptyState");
const count = document.getElementById("stockCount");

function orderLink(product){
  const message = `Hello Britech Computers, I would like to order: ${product.name}. Listed price: ${money(product.price)} (${usd(product.price)} approx). Please confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function render(){
  let items = products.filter(p => {
    const q = search.value.trim().toLowerCase();
    const matchesSearch = !q || `${p.name} ${p.brand} ${p.specs}`.toLowerCase().includes(q);
    const matchesCategory = category.value === "all" || p.category === category.value;
    const matchesBrand = brand.value === "all" || p.brand === brand.value;
    return matchesSearch && matchesCategory && matchesBrand;
  });
  if(sort.value === "low") items.sort((a,b)=>a.price-b.price);
  if(sort.value === "high") items.sort((a,b)=>b.price-a.price);
  count.textContent = `${items.length} products shown`;
  empty.hidden = items.length !== 0;
  grid.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name} product photograph" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85'">
        ${p.fresh ? '<span class="stock-badge">NEW STOCK</span>' : ''}
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand} · ${p.category}</span>
        <h3>${p.name}</h3>
        <div class="specs">${p.specs}</div>
        <div class="price-row"><span class="kes">${money(p.price)}</span><span class="usd">${usd(p.price)} approx.</span></div>
        <a class="order-btn" href="${orderLink(p)}" target="_blank" rel="noopener">Order on WhatsApp ↗</a>
      </div>
    </article>`).join("");
}
[search,category,brand,sort].forEach(el=>el.addEventListener("input",render));
document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".chip").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); category.value=btn.dataset.category; render();
}));
document.getElementById("year").textContent = new Date().getFullYear();
render();
