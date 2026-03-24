// Enhanced JavaScript for Savory Bites Restaurant Website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.textContent = '☰';
                }
                
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.background = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(44, 62, 80, 0.98)';
        } else {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        }
    });
    
    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Simple reservation modal
            const modal = document.createElement('div');
            modal.className = 'reservation-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Reserve Your Table</h3>
                    <form class="reservation-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="date" required>
                        <input type="time" required>
                        <select required>
                            <option value="">Select Party Size</option>
                            <option value="1-2">1-2 Guests</option>
                            <option value="3-4">3-4 Guests</option>
                            <option value="5-6">5-6 Guests</option>
                            <option value="7+">7+ Guests</option>
                        </select>
                        <button type="submit">Reserve Now</button>
                    </form>
                </div>
            `;
            
            // Add modal styles
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            document.body.appendChild(modal);
            
            // Close modal functionality
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            // Form submission
            const form = modal.querySelector('.reservation-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your reservation! We will contact you shortly to confirm.');
                document.body.removeChild(modal);
            });
        });
    }
    
    // Quote Button functionality
    const quoteButton = document.querySelector('.quote-button');
    if (quoteButton) {
        quoteButton.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'quote-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Get Catering Quote</h3>
                    <form class="quote-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="date" placeholder="Event Date" required>
                        <select required>
                            <option value="">Event Type</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="wedding">Wedding</option>
                            <option value="private">Private Party</option>
                            <option value="other">Other</option>
                        </select>
                        <input type="number" placeholder="Expected Guests" required>
                        <textarea placeholder="Tell us about your event..." rows="4"></textarea>
                        <button type="submit">Get Quote</button>
                    </form>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            document.body.appendChild(modal);
            
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            const form = modal.querySelector('.quote-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your inquiry! We will send you a detailed quote within 24 hours.');
                document.body.removeChild(modal);
            });
        });
    }
    
    // Apply Button functionality
    const applyButtons = document.querySelectorAll('.apply-button');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.closest('.job-card').querySelector('h3').textContent;
            const modal = document.createElement('div');
            modal.className = 'application-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Apply for ${jobTitle}</h3>
                    <form class="application-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <textarea placeholder="Tell us about your experience..." rows="4" required></textarea>
                        <input type="file" accept=".pdf,.doc,.docx" placeholder="Upload Resume">
                        <button type="submit">Submit Application</button>
                    </form>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            document.body.appendChild(modal);
            
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            const form = modal.querySelector('.application-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your application! We will review it and contact you if your qualifications match our needs.');
                document.body.removeChild(modal);
            });
        });
    });
    
    // Add modal styles to head
    const modalStyles = `
        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: #7f8c8d;
        }
        
        .modal-content h3 {
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }
        
        .modal-content form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .modal-content input,
        .modal-content select,
        .modal-content textarea {
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
        }
        
        .modal-content button {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
        }
        
        .modal-content button:hover {
            background: #c0392b;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    // Smart Catering Calculator Functionality
    const guestCount = document.getElementById('guest-count');
    const guestDisplay = document.getElementById('guest-display');
    const eventType = document.getElementById('event-type');
    const budgetRange = document.getElementById('budget-range');
    const totalPrice = document.getElementById('total-price');
    const perPerson = document.querySelector('.per-person');
    const menuSuggestions = document.getElementById('menu-suggestions');
    const budgetTips = document.getElementById('budget-tips');
    
    // Menu data for different budget levels
    const menuData = {
        economy: {
            price: 20,
            menu: [
                { name: 'Garden Salad', portion: '1 serving/guest' },
                { name: 'Pasta Primavera', portion: '8oz/guest' },
                { name: 'Garlic Bread', portion: '2 pieces/guest' }
            ],
            tips: [
                '💡 Add dessert for $5/person to complete the meal',
                '🌱 Vegetarian options save 10% on costs'
            ]
        },
        standard: {
            price: 32,
            menu: [
                { name: 'Mixed Appetizer Platter', portion: '3 pieces/guest' },
                { name: 'Grilled Chicken & Salmon', portion: '8oz protein/guest' },
                { name: 'Seasonal Vegetables', portion: '2 sides/guest' }
            ],
            tips: [
                '💡 Upgrade to premium for 20% more food variety',
                '🌱 Add vegetarian options to reduce costs by 15%'
            ]
        },
        premium: {
            price: 50,
            menu: [
                { name: 'Gourmet Appetizer Selection', portion: '4 pieces/guest' },
                { name: 'Prime Rib & Seafood Combo', portion: '12oz protein/guest' },
                { name: 'Chef\'s Choice Sides', portion: '3 sides/guest' },
                { name: 'Dessert Trio', portion: '1 serving/guest' }
            ],
            tips: [
                '🍷 Add wine pairing for $15/person',
                '⭐ Premium includes service staff'
            ]
        },
        luxury: {
            price: 85,
            menu: [
                { name: 'Luxury Appetizer Tower', portion: '5 pieces/guest' },
                { name: 'Filet Mignon & Lobster', portion: '16oz protein/guest' },
                { name: 'Truffle-infused Sides', portion: '4 sides/guest' },
                { name: 'Premium Dessert Bar', portion: 'Unlimited' },
                { name: 'Premium Bar Service', portion: 'Open bar' }
            ],
            tips: [
                '🥂 Luxury includes full-service staff and equipment',
                '🎯 Custom menu creation available'
            ]
        }
    };
    
    function updateCalculator() {
        const guests = parseInt(guestCount.value) || 50;
        const budget = budgetRange.value;
        const event = eventType.value;
        
        guestDisplay.textContent = guests;
        
        let basePrice = menuData[budget].price;
        let eventMultiplier = 1;
        
        // Event type multipliers
        if (event === 'wedding') eventMultiplier = 1.3;
        else if (event === 'corporate') eventMultiplier = 1.1;
        
        // Dietary adjustments
        let dietaryMultiplier = 1;
        const vegetarian = document.getElementById('vegetarian').checked;
        const vegan = document.getElementById('vegan').checked;
        const glutenFree = document.getElementById('gluten-free').checked;
        const halal = document.getElementById('halal').checked;
        
        if (vegetarian || vegan) dietaryMultiplier *= 0.85;
        if (glutenFree) dietaryMultiplier *= 1.1;
        if (halal) dietaryMultiplier *= 1.05;
        
        const finalPrice = Math.round(guests * basePrice * eventMultiplier * dietaryMultiplier);
        const perPersonPrice = Math.round(finalPrice / guests);
        
        totalPrice.textContent = finalPrice.toLocaleString();
        perPerson.textContent = `($${perPersonPrice}/person)`;
        
        // Update menu suggestions
        menuSuggestions.innerHTML = menuData[budget].menu.map(item => `
            <div class="menu-suggestion">
                <span class="dish-name">${item.name}</span>
                <span class="portion-size">${item.portion}</span>
            </div>
        `).join('');
        
        // Update budget tips
        budgetTips.innerHTML = menuData[budget].tips.map(tip => `<li>${tip}</li>`).join('');
        
        // Add dynamic tips based on selections
        let dynamicTips = [];
        if (guests > 100) {
            dynamicTips.push('📊 Large events get 5% discount');
        }
        if (event === 'wedding') {
            dynamicTips.push('💒 Wedding packages include complimentary champagne');
        }
        if (vegan && glutenFree) {
            dynamicTips.push('🌱 Special dietary requirements may affect menu variety');
        }
        
        budgetTips.innerHTML += dynamicTips.map(tip => `<li>${tip}</li>`).join('');
    }
    
    // Event listeners for calculator
    guestCount.addEventListener('input', updateCalculator);
    eventType.addEventListener('change', updateCalculator);
    budgetRange.addEventListener('change', updateCalculator);
    
    // Dietary checkboxes
    ['vegetarian', 'vegan', 'gluten-free', 'halal'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', updateCalculator);
        }
    });
    
    // Detailed quote button
    const detailedQuoteBtn = document.querySelector('.get-detailed-quote');
    if (detailedQuoteBtn) {
        detailedQuoteBtn.addEventListener('click', function() {
            const guests = guestCount.value;
            const event = eventType.options[eventType.selectedIndex].text;
            const budget = budgetRange.options[budgetRange.selectedIndex].text;
            
            const modal = document.createElement('div');
            modal.className = 'detailed-quote-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Detailed Catering Quote</h3>
                    <div class="quote-summary">
                        <h4>Event Summary</h4>
                        <p><strong>Guests:</strong> ${guests}</p>
                        <p><strong>Event Type:</strong> ${event}</p>
                        <p><strong>Budget Level:</strong> ${budget}</p>
                        <p><strong>Total Cost:</strong> $${totalPrice.textContent}</p>
                    </div>
                    <form class="detailed-quote-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="date" placeholder="Event Date" required>
                        <textarea placeholder="Special requirements or notes..." rows="4"></textarea>
                        <button type="submit">Request Detailed Quote</button>
                    </form>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
            `;
            
            document.body.appendChild(modal);
            
            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            const form = modal.querySelector('.detailed-quote-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Detailed quote request submitted! We will contact you within 24 hours with a comprehensive proposal.');
                document.body.removeChild(modal);
            });
        });
    }
    
    // Real-time Availability Simulation
    function simulateAvailabilityChanges() {
        const timeSlots = document.querySelectorAll('.time-slot');
        
        setInterval(() => {
            timeSlots.forEach(slot => {
                const availableBar = slot.querySelector('.available');
                const status = slot.querySelector('.status');
                const currentWidth = parseFloat(availableBar.style.width);
                
                // Random fluctuation in availability
                const change = (Math.random() - 0.5) * 10;
                const newWidth = Math.max(5, Math.min(95, currentWidth + change));
                
                availableBar.style.width = newWidth + '%';
                
                // Update status text
                const tables = Math.round(newWidth / 20);
                if (tables <= 1) {
                    status.textContent = newWidth < 10 ? 'Almost full' : '1 table left';
                } else {
                    status.textContent = `${tables} tables available`;
                }
            });
            
            // Update wait time
            const waitTime = document.querySelector('.wait-time');
            const waitMinutes = Math.floor(Math.random() * 30) + 10;
            waitTime.textContent = `${waitMinutes}-${waitMinutes + 10} minutes`;
        }, 5000); // Update every 5 seconds
    }
    
    simulateAvailabilityChanges();
    
    // Time slot click handler
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            const time = this.dataset.time;
            const status = this.querySelector('.status').textContent;
            
            // Highlight selected slot
            timeSlots.forEach(s => s.style.border = '1px solid rgba(255, 255, 255, 0.2)');
            this.style.border = '2px solid #f39c12';
            
            // Update reservation modal with selected time
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.className = 'reservation-modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <h3>Reserve Your Table</h3>
                        <div class="selected-time">
                            <p><strong>Preferred Time:</strong> ${time}</p>
                            <p><strong>Status:</strong> ${status}</p>
                        </div>
                        <form class="reservation-form">
                            <input type="text" placeholder="Your Name" required>
                            <input type="email" placeholder="Your Email" required>
                            <input type="tel" placeholder="Your Phone" required>
                            <input type="date" required>
                            <input type="time" value="${time.replace(' AM', ':00').replace(' PM', ':00')}" required>
                            <select required>
                                <option value="">Select Party Size</option>
                                <option value="1-2">1-2 Guests</option>
                                <option value="3-4">3-4 Guests</option>
                                <option value="5-6">5-6 Guests</option>
                                <option value="7+">7+ Guests</option>
                            </select>
                            <button type="submit">Reserve Now</button>
                        </form>
                    </div>
                `;
                
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                `;
                
                document.body.appendChild(modal);
                
                const closeModal = modal.querySelector('.close-modal');
                closeModal.addEventListener('click', function() {
                    document.body.removeChild(modal);
                });
                
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
                
                const form = modal.querySelector('.reservation-form');
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert(`Table reserved for ${time}! We will contact you shortly to confirm.`);
                    document.body.removeChild(modal);
                });
            }, { once: true });
        });
    });
});
