import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaStar, FaMapMarkerAlt, FaClock, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "917977238212";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const phoneUrl = `tel:+${whatsappNumber}`;

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* 1. Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Cake Story
          </div>
          <div className="hidden md:flex items-center space-x-8 text-foreground font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#products" className="hover:text-primary transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          </div>
          <div>
            <a href="#custom-form">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all">
                Order Now
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="text-center md:text-left pt-10 md:pt-0"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-full shadow-sm text-sm font-semibold text-secondary mb-6">
              <FaStar className="text-secondary" />
              <span>4.9</span>
              <span className="text-muted-foreground ml-1">based on 184+ reviews</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground mb-6">
              Mumbai's Favorite <br/>
              <span className="text-primary italic">Custom Cake</span> Destination
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Freshly Baked • Pure Veg • Customized with Love
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center gap-2 px-8 h-14 text-base shadow-md">
                  <FaWhatsapp className="text-xl" /> Order on WhatsApp
                </Button>
              </a>
              <a href="#products" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full rounded-full border-2 border-primary text-primary hover:bg-primary/5 h-14 px-8 text-base">
                  View Menu
                </Button>
              </a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center md:justify-start gap-2 text-foreground font-medium">
              <FaPhone className="text-primary" />
              <a href={phoneUrl} className="hover:text-primary transition-colors">+91 79772 38212</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform scale-110"></div>
            <img 
              src="/images/hero-cake.png" 
              alt="Beautiful custom cake" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. About Us Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 md:order-1 relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-tl-[3rem] rounded-br-[3rem] z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-tr-[4rem] rounded-bl-[4rem] z-0"></div>
              <img 
                src="/images/bakery-interior.png" 
                alt="Cake Story interior" 
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-xl aspect-[4/5] md:aspect-auto"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 md:order-2"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Sweet <span className="text-primary italic">Story</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cake Story is a warm, beloved neighborhood bakery in Mumbai where every cake is a handcrafted love letter. We believe that your most important moments deserve to be celebrated with sweetness, color, and a touch of magic.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                As a 100% pure vegetarian bakery, we take pride in using only the finest ingredients. No compromises. Just honest, delicious bakes crafted by artisans who care deeply about taste and design.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                <div>
                  <h4 className="font-bold text-3xl text-secondary mb-1">100%</h4>
                  <p className="text-sm font-medium text-foreground uppercase tracking-wider">Pure Veg</p>
                </div>
                <div>
                  <h4 className="font-bold text-3xl text-secondary mb-1">Fresh</h4>
                  <p className="text-sm font-medium text-foreground uppercase tracking-wider">Every Day</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Products Section */}
      <section id="products" className="py-24 bg-pink-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our <span className="text-primary italic">Menu</span></h2>
            <p className="text-lg text-muted-foreground">Handcrafted with premium vegetarian ingredients for your special moments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Birthday Cakes", price: "599", img: "/images/product-birthday.png", desc: "Celebrate another year with our stunning, delicious custom designs." },
              { title: "Anniversary Cakes", price: "799", img: "/images/product-anniversary.png", desc: "Romantic, elegant bakes to honor your beautiful journey together." },
              { title: "Wedding Cakes", price: "2499", img: "/images/product-wedding.png", desc: "Multi-tiered masterpieces crafted for the most important day." },
              { title: "Customized Theme Cakes", price: "899", img: "/images/product-theme.png", desc: "You dream it, we bake it. Perfect for kids and themed parties." },
              { title: "Photo Cakes", price: "699", img: "/images/product-photo.png", desc: "Your favorite memories printed beautifully on a delicious cake." },
              { title: "Premium Pastries", price: "59", img: "/images/product-pastries.png", desc: "French-inspired slices of heaven for everyday indulgences." }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square relative overflow-hidden bg-pink-50">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{product.title}</h3>
                    <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-sm whitespace-nowrap">
                      from ₹{product.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">
                    {product.desc}
                  </p>
                  <a href={`${whatsappUrl}?text=Hi, I would like to inquire about ${product.title}.`} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-white">
                      Order on WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">We also serve delicious Cake Bowls, Waffles, Chocolates & Cookies!</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Request Full Menu
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Special Offers Section */}
      <section className="py-20 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent blur-2xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Special Delights</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Little Treats, <br/>Big Happiness
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Try our signature Cake Bowls starting at just ₹99 or our fresh, crispy Waffles from ₹59. Perfect for a quick sweet fix!
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 text-foreground font-bold rounded-full px-8">
                  Grab the Offer
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-white/10 p-6 rounded-2xl text-center backdrop-blur-md">
                <h4 className="font-serif text-2xl font-bold text-secondary mb-1">₹99</h4>
                <p className="text-sm font-medium">Cake Bowls</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl text-center backdrop-blur-md">
                <h4 className="font-serif text-2xl font-bold text-secondary mb-1">₹59</h4>
                <p className="text-sm font-medium">Fresh Waffles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Custom Cake Designer Form */}
      <section id="custom-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Design Your <span className="text-primary italic">Dream Cake</span></h2>
              <p className="text-lg text-muted-foreground">Fill out the details below and we'll connect with you on WhatsApp to finalize the magic.</p>
            </div>
            
            <div className="bg-white border border-border shadow-xl rounded-3xl p-6 md:p-10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const text = `Hi Cake Story! I want to order a custom cake:\n\n*Flavor:* ${fd.get('flavor')}\n*Weight:* ${fd.get('weight')}\n*Date:* ${fd.get('date')}\n*Special Instructions:* ${fd.get('instructions')}\n\nPlease let me know the price and next steps!`;
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Flavor Profile</label>
                    <Select name="flavor" required>
                      <SelectTrigger className="rounded-xl h-12 bg-muted/50 border-transparent focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select flavor" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Chocolate", "Vanilla", "Strawberry", "Red Velvet", "Butterscotch", "Black Forest", "Mango", "Pineapple"].map(f => (
                          <SelectItem key={f} value={f}>{f}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Cake Weight</label>
                    <Select name="weight" required>
                      <SelectTrigger className="rounded-xl h-12 bg-muted/50 border-transparent focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select weight" />
                      </SelectTrigger>
                      <SelectContent>
                        {["500g", "1kg", "1.5kg", "2kg", "2.5kg+"].map(w => (
                          <SelectItem key={w} value={w}>{w}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Delivery / Pickup Date</label>
                  <Input type="date" name="date" required className="rounded-xl h-12 bg-muted/50 border-transparent focus:border-primary focus:ring-primary" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Special Instructions & Message</label>
                  <Textarea 
                    name="instructions" 
                    placeholder="Tell us about the theme, colors, and what to write on the cake..." 
                    className="rounded-xl min-h-[120px] bg-muted/50 border-transparent focus:border-primary focus:ring-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md">
                  Send Request via WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Note: You can share reference images directly in the WhatsApp chat.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <section id="gallery" className="py-24 bg-pink-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our <span className="text-primary italic">Creations</span></h2>
            <p className="text-lg text-muted-foreground">A glimpse into the magic we bake every day.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              "/images/hero-cake.png",
              "/images/product-wedding.png",
              "/images/gallery-1.png",
              "/images/product-birthday.png",
              "/images/product-theme.png",
              "/images/gallery-2.png",
              "/images/product-anniversary.png",
            ].map((src, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid shadow-sm hover:shadow-lg transition-all"
                onClick={() => setActiveImage(src)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium transition-opacity">View Full</span>
                </div>
                <img src={src} alt="Cake Gallery" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            />
            <button className="absolute top-6 right-6 text-white text-xl p-2 bg-black/50 rounded-full hover:bg-black transition-colors">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 8. Customer Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Love from <span className="text-primary italic">Mumbai</span></h2>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex text-secondary text-xl">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
              <span className="text-xl font-bold text-foreground">4.9/5</span>
            </div>
            <p className="text-lg text-muted-foreground">What our lovely customers have to say about us.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priya Sharma", text: "Ordered a custom Barbie theme cake for my daughter's 5th birthday. Not only did it look absolutely stunning, but the taste was out of this world! The chocolate truffle flavor is a must-try." },
              { name: "Rahul Desai", text: "Best pure veg bakery in Borivali! We ordered our 25th anniversary cake here. The finishing was so premium and the staff is incredibly warm and helpful." },
              { name: "Neha Patel", text: "Cake Story never disappoints. Their pastries are always fresh, but their custom cakes are the real deal. They really pay attention to every tiny detail you ask for." },
              { name: "Vikram Mehta", text: "I ordered a photo cake last minute and they delivered perfectly on time. The sponge was so soft and the cream wasn't too heavy. Perfect balance of sweetness." },
              { name: "Sneha Gupta", text: "The presentation of the cake was exactly like the reference picture I shared on WhatsApp. Everyone at the party asked where the cake was from!" },
              { name: "Anjali K.", text: "Their ₹99 Cake bowls are my guilty pleasure. But for big events, I completely trust Cake Story. The team puts so much love into their work, you can taste it." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } }
                }}
                className="bg-pink-50/50 p-8 rounded-2xl border border-pink-100"
              >
                <div className="flex text-secondary text-sm mb-4">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <p className="text-muted-foreground italic mb-6">"{review.text}"</p>
                <div className="font-bold text-foreground font-serif">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="py-24 bg-foreground text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-8">Visit <span className="text-primary italic">Cake Story</span></h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-white/70 leading-relaxed">
                      Shop No. 3, Siddhivinayak Plaza CHS,<br/>
                      New Link Road, Chikuwadi, Shimpoli,<br/>
                      Borivali West, Mumbai, Maharashtra 400092
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-white/70">Open Daily: 10:00 AM – 11:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contact</h4>
                    <a href={phoneUrl} className="block text-white/70 hover:text-white transition-colors">+91 79772 38212</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 h-12 shadow-lg">
                    <FaWhatsapp className="mr-2 text-lg" /> Chat with us
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.109041235338!2d72.8361099!3d19.2340799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12d5df9a203%3A0xbccaa7f603c68a41!2sSiddhivinayak%20Plaza%20CHS!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#4a322c] text-white/80 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8 mb-8">
            <div className="font-serif text-3xl font-bold text-white">Cake Story</div>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.instagram.com/cakestorymumbai?igsh=MXJzOHM5bWN3OHBocQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-transform"
              >
                <FaInstagram style={{ fontSize: "2rem" }} />
                <span>@cakestorymumbai</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p>© 2025 Cake Story. All rights reserved. | Pure Vegetarian Bakery, Mumbai</p>
          </div>
        </div>
      </footer>

      {/* 11. Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* 12. Mobile Call Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-border z-40">
        <a href={phoneUrl} className="w-full block">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg">
            <FaPhone /> Call Now
          </Button>
        </a>
      </div>
      
      {/* Padding for mobile to account for fixed bottom bar */}
      <div className="h-20 md:hidden bg-[#4a322c]"></div>
    </div>
  );
}
