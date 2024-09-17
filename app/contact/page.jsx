"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8590645509",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gladwinsanthosh6@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Alappat H, Thrissur, Kerala",
  },
];

const Contact = () => {
  const formRef = useRef(null);

const sendEmail = (e) => {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(formRef.current);
  const customerEmail = formData.get("email");
  const customerName = formData.get("firstname") + " " + formData.get("lastname"); // Combine first and last names
  const service = formData.get("service");
  const message = formData.get("message");

  // Sending email to yourself with form details
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_my_service_id,
             // Your service ID
      process.env.NEXT_PUBLIC_my_template,      // Your template ID (for sending to yourself)
      formRef.current,         // The form reference
      process.env.NEXT_PUBLIC_public_key,
      {
        from_name: customerName
      },
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");

        // Now send acknowledgment to the customer
        emailjs
          .send(
            process.env.NEXT_PUBLIC_my_service_id,       // Your service ID
            process.env.NEXT_PUBLIC_customer_template  ,      // A new template for acknowledgment
            {
              to_email: customerEmail,  // Email of the customer
              from_name: customerName,  // Name of the customer
              service: service,          // Service requested
              message: message,          // Message content
            },
            process.env.NEXT_PUBLIC_public_key        // Your user ID
          )
          .then(
            (result) => {
              console.log("Acknowledgment sent:", result.text);
            },
            (error) => {
              console.log("Failed to send acknowledgment:", error.text);
            }
          );
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message!");
      }
    );

  e.target.reset(); // Reset form fields after submission
};


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-0"
    >
      <div className="container mx-auto sm:my-4">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="order-2 xl:w-[54%] xl:order-none">
            <form
              className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl my-0 pt-5 sm:my-5"
              ref={formRef}
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent-defaults">Let's work together</h3>
              <p className="text-white/60">
                Open to new opportunities and collaborations. Let’s discuss how we can achieve great results together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="firstname" type="text" placeholder="Firstname" />
                <Input name="lastname" type="text" placeholder="Lastname" />
                <Input name="email" type="email" placeholder="Email address" />
                <Input name="phone" type="tel" placeholder="Phone number" />
              </div>
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" className="h-28" placeholder="Type your Message here." />
              <Button type="submit" size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((Item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-12 h-12 xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-defaults rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{Item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{Item.title}</p>
                      <h3 className="text-sm">{Item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
