<?php

// Include MongoDB library
require 'vendor/autoload.php';

// Connect to MongoDB
$client = new MongoDB\Client('mongodb://localhost:27017');

// Select a database
$database = $client->your_database_name; // Replace 'your_database_name' with your actual database name

// Select a collection
$collection = $database->profiles; // Replace 'profiles' with your actual collection name

// Retrieve data from POST request
$dob = $_POST['dob'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$bloodgroup = $_POST['bloodgroup'];
$interest = $_POST['interest'];
$cgpa = $_POST['cgpa'];
$additionalFields = $_POST['additionalFields'];

// Create a document to insert into the collection
$document = [
    'dob' => $dob,
    'contact' => $contact,
    'address' => $address,
    'bloodgroup' => $bloodgroup,
    'interest' => $interest,
    'cgpa' => $cgpa,
    'additionalFields' => $additionalFields
];

// Insert the document into the collection
$insertResult = $collection->insertOne($document);

// Check if insertion was successful
if ($insertResult->getInsertedCount() > 0) {
    $response = [
        'status' => 'success',
        'message' => 'Profile saved successfully'
    ];
} else {
    $response = [
        'status' => 'error',
        'message' => 'Failed to save profile'
    ];
}

// Send JSON response
header('Content-Type: application/json');
echo json_encode($response);
