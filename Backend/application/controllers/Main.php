<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

  	function __construct()
    {
            parent::__construct();
            $this->load->model('mcustomer');
             header('Content-type: application/json'); 
    }


    //Funcion principal Home
	public function index()
	{
		
		/*$document = '123';
		$users =  $this->mcustomer->login($document);

		if($users!=false){

			echo json_encode($users) ;

		}*/

		echo "Home";

	}


	//Funcion Login que recibe el documento y password para validar si existe y retorna un JSON con los datos solci
	public function login(){

		$document = '123';
		$users =  $this->mcustomer->login($document);
		if($users!=false){

			echo json_encode($users) ;

		}
	}

	//Funcion Usuers que consulta la cantidad de usuarios 
	public function users(){

		$users =  $this->mcustomer->users();
		if($users!=false){

			echo json_encode($users) ;

		}
	}

	//Funcion para listar un usuario por ID
	public function userid(){

		$id = $this->input->get('id');
		$users =  $this->mcustomer->userid($id);
		if($users!=false){

			echo json_encode($users) ;

		}
	}

	//Funcion para Editar un usuario por ID
	public function useridEdit(){

		$id = $this->input->get('id');
		$name = $this->input->get('name');
		$phone = $this->input->get('phone');
		$gender = $this->input->get('gender');
		$users =  $this->mcustomer->useridEdit($id,$name, $phone,$gender);

		if($users!=false){

			echo json_encode($users) ;

		}
	}


	//Funcion para Agregar un usuario
	public function useradd(){


		$requestData = json_decode(file_get_contents('php://input'), true);

		foreach ($requestData as $key => $val){
	        $val = filter_var($val, FILTER_SANITIZE_STRING); // Remove all HTML tags from string
	        $requestData[$key] = $val;

	    }

		
		$name       = $requestData['name'];
		$document   = $requestData['document'];
		$gender     = $requestData['gender'];
		$date_birth = $requestData['date_birth'];
		$phone      = $requestData['phone'];
		$eps_id     = $requestData['eps_id'];
		$rol_id     = $requestData['rol_id'];

		

		$users =  $this->mcustomer->useradd($name,$document, $gender, $date_birth, $phone,$eps_id,$rol_id);
		
		if($users!=false){

			echo json_encode($users) ;

		}
	}
}
