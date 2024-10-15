# class Person:
#     def __init__(self,name,age,gender):
#         self.name=name
#         self.age=age
#         self.gender=gender

#     def __str__(self) :
#         return f"{self.name},{self.age}years old and is {self.gender}" 
# class Patient(Person):
#     def __init__(self,name,gender,age,patient_id):
#         super().__init__(name,age,gender)
#         self.patient_id = patient_id
        
#     def __str__(self):    
#         return f"Patient Id : {self.patient_id}" + super().__str__()
    
# class Doctor(Person):
#     def __init__(self,name,age,gender,doctor_id,speciality):
#         super().__init__(name,age,gender)
#         self.doctor_id=doctor_id
#         self.speciality=speciality   
        
#     def __str__(self):
#         return f"Doctor ID: {self.doctor_id}, Speciality{self.speciality}" + super().__str__()
    
# class Appointment():
#     def __init__(self,patient,doctor,date,time,appointment_id):
#         self.patient =patient
#         self.doctor = doctor
#         self.date =date
#         self.time=time
#         self.appointment_id =appointment_id                 
#     def __str__(self):
#         return ( f"Patient:{self.patient.name},Doctor:{self.doctor.name},"
#                 f"Date: {self.date}, Time:{self.time},"
#                 f"Appointment ID: {self.appointment_id }")
    
# class Hospital:
#     def __init__(self):
#         self.patients=[]
#         self.doctors=[]
#         self.appointments=[]

#     def add_patients(self,patient):
#         for patient in self.patients:
#             self.patients.append(patient)
#             print(f"{patient.name} added successfully")

#     def add_doc(self,doctor):
#         for doctor in self.doctors:
#             self.doctors.append(doctor)  
#             print(f"{doctor.name} added successfully") 

#     def add_appointment(self,appointment):
#         for appointment in self.appointments:
#             self.appointments.append(appointment) 
#             print(f"appointment added successfully")  

#     def list_patients(self):
#         for patient in self.patients:
#             print(patient)                 

#     def list_doc(self):
#         for doctor in self.doctors:
#             print(doctor)

#     def list_appointment(self):
#         for appointment in self.appointments:
#             print(appointment)


# if __name__ == "__main__":
#     hospital=Hospital()
# # Adding Patients
#     patient1=Patient("John","Male",32,1000)
#     patient2=Patient("Raghav","Male",32,1001)
#     patient3=Patient("Gayatri","female",32,1002)
#     patient4=Patient("Arjun","Male",32,1003)
#     patient5=Patient("Maya","Female",32,1004)
#     patient6=Patient("Vaishnav","Male",32,1005)
#     patient7=Patient("Johana","female",32,1006)
#     patient8=Patient("Mohit","Male",32,1007)
#     patient9=Patient("Bloom","Female",32,1008)
#     patient10=Patient("Flora","Female",32,1009)

#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1) 
#     hospital. add_patients(patient1)
#     hospital. add_patients(patient1)

# #Adding Doctors
#     doctor1=Doctor("Dr Payal",34,"Female",101,"Dermatologist")
#     doctor2=Doctor("Dr Mahesh",40,"Male",102,"Cardiologist")
#     doctor3=Doctor("Dr Prerna",30,"Female",103,"Gynaecologist")
#     doctor4=Doctor("Dr Mayuri",29,"Female",104,"Pulmunologist")
#     doctor5=Doctor("Dr Arnav",48,"Male",105,"Radiation Oncologist")
#     doctor6=Doctor("Dr Ridhima",38,"Female",106,"Cosmetic and Plastic Surgeon")
#     doctor7=Doctor("Dr Kartik",50,"Male",107,"General Physician")
#     doctor8=Doctor("Dr Muskan",29,"Female",108,"Dentist")
#     doctor9=Doctor("Dr Gurmukh Singh",27,"Male",109,"Neurosurgeon")
#     doctor10=Doctor("Dr Harsimran Singh",27,"Male",110,"Nephrologist")

#     hospital.add_doc(doctor1)
#     hospital.add_doc(doctor2)
#     hospital.add_doc(doctor3)
#     hospital.add_doc(doctor4)
#     hospital.add_doc(doctor5)
#     hospital.add_doc(doctor6)
#     hospital.add_doc(doctor7)
#     hospital.add_doc(doctor8)
#     hospital.add_doc(doctor9)
#     hospital.add_doc(doctor10)

# #Scheduling Appointments

#     appointment1 = Appointment( patient1, doctor1, "2024-07-20", "10:00 AM",1001)
#     appointment2 = Appointment(patient2, doctor2, "2024-07-21", "02:00 PM",1002 )
#     appointment3 = Appointment( patient3, doctor3, "2024-07-22", "10:30 AM",1003)
#     appointment4 = Appointment(patient4, doctor4, "2024-07-20", "01:00 PM",1004 )
#     appointment5 = Appointment( patient5, doctor5, "2024-07-28", "10:30 AM",1005)
#     appointment6 = Appointment(patient6, doctor6, "2024-07-29", "03:00 PM",1006 )
#     appointment7 = Appointment( patient7, doctor7, "2024-08-01", "4:30 PM",1007)
#     appointment8 = Appointment(patient8, doctor8, "2024-07-26", "02:00 PM",1008 )
#     appointment9 = Appointment( patient9, doctor9, "2024-08-05", "09:00 AM",1009)
#     appointment10 = Appointment(patient10, doctor10, "2024-07-20", "09:30 AM",1010 )


#     hospital.add_appointment(appointment1)
#     hospital.add_appointment(appointment2)
#     hospital.add_appointment(appointment3)
#     hospital.add_appointment(appointment4)
#     hospital.add_appointment(appointment5)
#     hospital.add_appointment(appointment6)
#     hospital.add_appointment(appointment7)
#     hospital.add_appointment(appointment8)
#     hospital.add_appointment(appointment9)
#     hospital.add_appointment(appointment10)

#     print("\n Patients:")
#     hospital.list_patients()
#     print("\n Doctors:")
#     hospital.list_doc()
#     print("\n Appointments:")
#     hospital.list_appointment()