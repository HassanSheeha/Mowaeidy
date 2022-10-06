// user
// {
//   firstname
//   lastname
//   email
//   password
//   date_of_birth
//   phone
//   city
//   profilepicture
//   username(firstname + genratednumber)//hassan10055
//   organizer >> Boolean
//   commited >> %
//   number_of_appointment
// }

// origanizer{
// user_id_Fk
// name_of_organization
// title
// contact -notrequired
// description -notrequired
// individual>>Boolean
// industry_ID_FK
// available_days[sun]
// available_hours[13:00]
// amount_of_required_daposit -notrequired
// question -notrequired
// rating
// number_of_appointment
// total_paid_money
// }

// industry{
//   name
//   description
//   cancelation-time
//   allow-payment
// }

// appointment{
//   made-by -user_id_Fk
//   made-to -organizer_id_Fk
//   starts_on
//   status//pending-confirmed-done-canceledByuser-canceledByOrganizer
//   deposit_paid
//   duration
//   answer
// }

// admin
// websitfe ino
// blog
