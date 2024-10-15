print("Hi, how can we help you")
print("Please choose one of these options:\n1. Add new patient\n2. Print all patients\n3. Get next patient\n4. Remove a leaving patient\n5. End the program")
x=input("Enter your result: ")
print(x)

specialization= {1 :"Pediatrics", 2:"Radiotherapy", 3:"Cardiology", 4:"Oncosurgery", 5:"Dermatology",6:"Cosmetics and Plastic Surgery",7:"Internal Medicine",8: "Nephrology",9:"Ophthalmology",10:"ENT"}

print(specialization.get(1))

Pediatrics =[]
Radiotherapy=[]
Cardiology=[]

class Patient:


    def __init__(self,name,age,gender,status):
        self.name=name
        self.age=age
        self.gender=gender
        self.status=status

    def __str__(self):
        return f"{self.name} ,{self.age}years old {self.gender}, with status{self.status} "    
   

class Doctor:
    def __init__(self,name,speciality):
        self.name=name
        self.speciality=speciality  

    def __str__(self):
        return f"{self.name} : Speciality = {self.speciality}" 

class Appointment:
    def __init__(self,patient,date,time,speciality,doctor): 
        self.patient=patient
        self.date=date
        self.time=time
        self.speciality=speciality
        self.doctor=doctor

    def __str__(self):
        super().__init__()
        return f"{self.patient}, Appointment date :{self.date}, Appointment time:{self.time}, Speciality:{self.speciality}, {self.doctor}"         


class Hospital:
    def __init__(self):
        self.patients=[]
        self.doctors=[]
        self.appointments=[]

    def add_patient(self,patient):
        if patient not in self.patients:
            self.patients.append(patient)
            print(f"{patient.name} added successfully")

    def add_doc(self,doctor):
        if doctor not in self.doctors:
            self.doctors.append(doctor)
            print(f"{doctor.name} added successfully")

    def add_appointment(self,appointment):
        if appointment not in self.appointments:
            self.appointments.append(appointment)
            print(f"Appointment added successfully")


    def list_patients(self):
        for patient in self.patients:
            print(patient)        

    def list_doc(self):
        for doctor in self.doctors:
            print(doctor)

    def list_appoint(self):
        for appointment in self.appointments:
            print(appointment)        
        
hospital = Hospital()

patient1 = Patient("Raghav", 32, "Male", 0)
patient2 = Patient("Raman", 36, "Male", 1)
patient3 = Patient("Gaurav",45,"Male",0)
patient4 = Patient("Prerna",28,"Female",2)
patient5 = Patient("Aditi",19,"Female",2)
patient6 = Patient("Manohar",29,"Male",0)
patient7 = Patient("Aruna",60,"Female",1)
patient8 = Patient("Kritika",36,"Female",1)
patient9 = Patient("Harpreet",40,"Female",0)
patient10 = Patient("Prakash",45,"Male",0)

doctor1 = Doctor("Dr.Payal", "Dermatologist")
doctor2 = Doctor("Dr.Arnav", "Oncologis")
doctor3=Doctor("Dr Karuna","Dermatologist")
doctor4=Doctor("Dr Mahesh","Cardiologist")
doctor5=Doctor("Dr Prerna","Gynaecologist")
doctor6=Doctor("Dr Mayuri","Pulmunologist")
doctor7=Doctor("Dr Arnav","Radiation Oncologist")
doctor8=Doctor("Dr Ridhima","Cosmetic and Plastic Surgeon")
doctor9=Doctor("Dr Kartik","General Physician")
doctor10=Doctor("Dr Muskan","Dentist")
doctor11=Doctor("Dr Gurmukh Singh","Neurosurgeon")
doctor12=Doctor("Dr Harsimran Singh","Nephrologist")

appointment1=Appointment("Raghav","29/07/2024","9AM","Cardiologist","Dr Mahesh")
appointment2=Appointment("Gaurav","30/07/2024","9:30AM","Radiation Oncologist","Dr Arnav")
appointment3=Appointment("Raman","29/07/2024","10AM","General Physician","Dr Kartik")
appointment4=Appointment("Harpreet","2/08/2024","11AM","Cosmetic and Plastic Surgeon","Dr Ridhima")
appointment5=Appointment("Kritika","01/08/2024","1PM","Neurosurgeon","Dr Gurmukh Singh",)
appointment6=Appointment("Aruna","23/07/2024","2PM","Dentist","Dr Muskan")
appointment7=Appointment("Manohar","25/07/2024","2:30PM","Nephrologist","Dr Harsimran Singh")
appointment8=Appointment("Aditi","27/07/2024","9:30M","Pulmunologist","Dr Mayuri")
appointment9=Appointment("Prakash","30/07/2024","4PM","Oncologist","Dr Arnav")

hospital.add_patient(patient1)
hospital.add_patient(patient2)
hospital.add_patient(patient3)
hospital.add_patient(patient4)
hospital.add_patient(patient5)
hospital.add_patient(patient6)
hospital.add_patient(patient7)
hospital.add_patient(patient8)
hospital.add_patient(patient9)


hospital.add_doc(doctor1)
hospital.add_doc(doctor2)
hospital.add_doc(doctor3)
hospital.add_doc(doctor4)
hospital.add_doc(doctor5)
hospital.add_doc(doctor6)
hospital.add_doc(doctor7)
hospital.add_doc(doctor8)
hospital.add_doc(doctor9)
hospital.add_doc(doctor10)
hospital.add_doc(doctor11)
hospital.add_doc(doctor12)


hospital.add_appointment(appointment1)
hospital.add_appointment(appointment2)
hospital.add_appointment(appointment3)
hospital.add_appointment(appointment4)
hospital.add_appointment(appointment5)
hospital.add_appointment(appointment6)
hospital.add_appointment(appointment7)
hospital.add_appointment(appointment8)
hospital.add_appointment(appointment9)

print("Patients: ")
hospital.list_patients()
print("Doctors: ")
hospital.list_doc()

print("Appointment: ")
hospital.list_appoint()

x=int(input("Enter no. from 2 to 5 :"))
if x==2:
    print("Patients: ")
    hospital.list_patients()   
elif x==3:
    hospital.add_patient(patient10)
elif x==5:
    print("Program ended")