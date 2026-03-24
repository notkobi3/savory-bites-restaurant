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
    
    // Cart Toggle Functionality
    const cartToggle = document.querySelector('.cart-toggle');
    const cartSidebar = document.querySelector('.cart-sidebar');
    
    if (cartToggle && cartSidebar) {
        cartToggle.addEventListener('click', function() {
            cartSidebar.classList.toggle('collapsed');
            
            // Toggle icon between cart and close
            if (cartSidebar.classList.contains('collapsed')) {
                cartToggle.textContent = '🛒';
            } else {
                cartToggle.textContent = '✕';
            }
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
    
    // TV Zone Reservation Functionality
    const reserveZoneButtons = document.querySelectorAll('.reserve-zone');
    reserveZoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            const zoneName = this.closest('.tv-zone').querySelector('h3').textContent;
            const zoneCapacity = this.closest('.tv-zone').querySelector('.zone-capacity').textContent;
            const availability = this.closest('.tv-zone').querySelector('.zone-availability span').textContent;
            
            const modal = document.createElement('div');
            modal.className = 'zone-reservation-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Reserve ${zoneName}</h3>
                    <div class="zone-info">
                        <p><strong>Zone:</strong> ${zoneName}</p>
                        <p><strong>Capacity:</strong> ${zoneCapacity}</p>
                        <p><strong>Status:</strong> ${availability}</p>
                    </div>
                    <form class="zone-reservation-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="date" placeholder="Reservation Date" required>
                        <input type="time" placeholder="Start Time" required>
                        <input type="number" placeholder="Number of Guests" min="1" max="${zoneCapacity.match(/\d+/)[0]}" required>
                        <select required>
                            <option value="">Occasion</option>
                            <option value="game">Game Watching</option>
                            <option value="party">Private Party</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea placeholder="Special requests or notes..." rows="3"></textarea>
                        <button type="submit">Reserve Zone</button>
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
            
            const form = modal.querySelector('.zone-reservation-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert(`${zoneName} reservation confirmed! We will contact you to finalize details.`);
                document.body.removeChild(modal);
            });
        });
    });
    
    // Event Calendar Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            eventCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Event Reservation Functionality
    const reserveEventButtons = document.querySelectorAll('.reserve-event');
    reserveEventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard.querySelector('h3').textContent;
            const eventDate = eventCard.querySelector('.day').textContent + ' ' + eventCard.querySelector('.month').textContent;
            const eventTime = eventCard.querySelector('.event-time').textContent;
            const eventDescription = eventCard.querySelector('.event-description').textContent;
            
            const modal = document.createElement('div');
            modal.className = 'event-reservation-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>Register for ${eventTitle}</h3>
                    <div class="event-info">
                        <p><strong>Event:</strong> ${eventTitle}</p>
                        <p><strong>Date:</strong> ${eventDate}</p>
                        <p><strong>Time:</strong> ${eventTime}</p>
                        <p><strong>Description:</strong> ${eventDescription}</p>
                    </div>
                    <form class="event-reservation-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="number" placeholder="Number of People" min="1" max="10" required>
                        <select required>
                            <option value="">Group Type</option>
                            <option value="individual">Individual</option>
                            <option value="group">Group (2-4)</option>
                            <option value="team">Team (5+)</option>
                        </select>
                        <textarea placeholder="Special accommodations or notes..." rows="3"></textarea>
                        <button type="submit">Register for Event</button>
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
            
            const form = modal.querySelector('.event-reservation-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert(`You're registered for ${eventTitle}! We'll send confirmation details to your email.`);
                document.body.removeChild(modal);
            });
        });
    });
    
    // Cart System for Pre-Order
    let cart = [];
    
    // Add to Cart functionality for menu items
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.dataset.item;
            const price = parseFloat(this.dataset.price);
            
            addToCart({ name: item, price: price, quantity: 1 });
            updateCartDisplay();
            
            // Visual feedback
            this.textContent = 'Added!';
            this.style.background = '#27ae60';
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '';
            }, 1500);
        });
    });
    
    // Pre-Order quantity controls
    const increaseButtons = document.querySelectorAll('.increase-qty');
    const decreaseButtons = document.querySelectorAll('.decrease-qty');
    
    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemElement = this.closest('.preorder-item');
            const itemName = itemElement.querySelector('h4').textContent;
            const itemPrice = parseFloat(itemElement.querySelector('.price').textContent.replace('$', ''));
            const quantityElement = itemElement.querySelector('.quantity');
            
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            
            addToCart({ name: itemName, price: itemPrice, quantity: 1 });
            updateCartDisplay();
        });
    });
    
    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemElement = this.closest('.preorder-item');
            const itemName = itemElement.querySelector('h4').textContent;
            const quantityElement = itemElement.querySelector('.quantity');
            
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                
                removeFromCart(itemName, 1);
                updateCartDisplay();
            }
        });
    });
    
    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push({
                name: item.name,
                price: item.price,
                quantity: item.quantity
            });
        }
    }
    
    function removeFromCart(itemName, quantity) {
        const itemIndex = cart.findIndex(cartItem => cartItem.name === itemName);
        
        if (itemIndex !== -1) {
            cart[itemIndex].quantity -= quantity;
            
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
        }
    }
    
    function updateCartDisplay() {
        const cartItems = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const totalAmount = document.querySelector('.total-amount');
        const checkoutBtn = document.querySelector('.checkout-btn');
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <p>Add items to get started!</p>
                </div>
            `;
            cartCount.textContent = '0 items';
            totalAmount.textContent = '$0.00';
            checkoutBtn.disabled = true;
        } else {
            let cartHTML = '';
            let total = 0;
            let itemCount = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                itemCount += item.quantity;
                
                cartHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                        </div>
                        <div class="cart-item-total">
                            <span>$${itemTotal.toFixed(2)}</span>
                            <button class="remove-item" data-item="${item.name}">×</button>
                        </div>
                    </div>
                `;
            });
            
            cartItems.innerHTML = cartHTML;
            cartCount.textContent = `${itemCount} items`;
            totalAmount.textContent = `$${total.toFixed(2)}`;
            checkoutBtn.disabled = false;
            
            // Add remove item functionality
            const removeButtons = document.querySelectorAll('.remove-item');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const itemName = this.dataset.item;
                    
                    // Find the preorder item with matching name
                    const preorderItems = document.querySelectorAll('.preorder-item');
                    preorderItems.forEach(item => {
                        const itemTitle = item.querySelector('h4').textContent;
                        if (itemTitle === itemName) {
                            const quantityElement = item.querySelector('.quantity');
                            quantityElement.textContent = '0';
                        }
                    });
                    
                    removeFromCart(itemName, Infinity);
                    updateCartDisplay();
                });
            });
        }
    }
    
    // Checkout functionality
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        if (cart.length > 0) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            const modal = document.createElement('div');
            modal.className = 'checkout-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h3>🏴‍☠️ Pre-Order Confirmation</h3>
                    <div class="order-summary">
                        <h4>Order Summary</h4>
                        <p><strong>Items:</strong> ${itemCount}</p>
                        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
                        <div class="order-items">
                            ${cart.map(item => `<p>• ${item.name} x ${item.quantity}</p>`).join('')}
                        </div>
                    </div>
                    <form class="checkout-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone" required>
                        <input type="date" placeholder="Pickup Date" required>
                        <input type="time" placeholder="Pickup Time" required>
                        <textarea placeholder="Special instructions..." rows="3"></textarea>
                        <button type="submit">Complete Pre-Order</button>
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
            
            const form = modal.querySelector('.checkout-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert(`Pre-order confirmed! Total: $${total.toFixed(2)}. We'll send confirmation details to your email.`);
                
                // Clear cart
                cart = [];
                updateCartDisplay();
                
                // Reset quantities
                document.querySelectorAll('.quantity').forEach(qty => qty.textContent = '0');
                
                document.body.removeChild(modal);
            });
        }
    });
    
    // Initialize cart display
    updateCartDisplay();
});
