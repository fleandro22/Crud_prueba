<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MCustomer extends CI_Model {

        function __construct()
        {
                parent::__construct();
                $this->load->database();
        }

       
        //Consulta la table de usuarios con el documento enviado por el controlador para validar si existe.
        public function login($document)
        {

                $sql="SELECT id, nombre as name, telefono as phone FROM TB_USUARIOS WHERE DOCUMENTO = '$document'";    
                $query = $this->db->query($sql);

                if($query->num_rows() >=1){

                    return $query->result();

                }
                else
                {

                        return false;
                }

        }

         public function users()
        {

                $sql="SELECT 
                        U.id, 
                        U.nombre, 
                        documento, 
                        genero, 
                        TIMESTAMPDIFF(YEAR,fecha_nacimiento,CURDATE()) AS edad, 
                        telefono,
                        R.nombre rol,
                        E.nombre eps
                        FROM 
                        TB_USUARIOS U,
                        TB_ROLES R,
                        TB_EPS E
                        WHERE U.rol_id = R.id
                        AND U.eps_id = E.id";    
                $query = $this->db->query($sql);

                if($query->num_rows() >=1){

                        return $query->result();

                }
                else
                {

                        return false;
                }

        }


         //Consulta la table de usuarios con el documento enviado por el controlador para validar si existe.
        public function userid($id)
        {

                //$sql="SELECT id, nombre as name, telefono as phone FROM TB_USUARIOS WHERE id = '$id'";   

                 $sql="SELECT 
                        U.id as id, 
                        U.nombre as name, 
                        documento as document, 
                        genero as gender, 
                        fecha_nacimiento AS date_birth, 
                        telefono as phone,
                        R.nombre as rol_id,
                        E.nombre as eps_id
                        FROM 
                        TB_USUARIOS U,
                        TB_ROLES R,
                        TB_EPS E
                        WHERE U.rol_id = R.id
                        AND U.eps_id = E.id
                        and U.id='$id'";  


                $query = $this->db->query($sql);

                if($query->num_rows() >=1){

                        return$query->row();    

                }
                else
                {

                        return false;
                }

        }

        public function useridEdit($id, $name, $phone,$gender)
        {

                $data = array(
                'NOMBRE' => $name,
                'TELEFONO' => $phone,
                'GENERO' => $gender
                                
            );
            $this->db->where('ID', $id);
            $this->db->update('TB_USUARIOS', $data);

            if ($this->db->affected_rows() == '1') {
                return true;
            }else{

                return false;
            }

        }


        public function useradd($name,$document, $gender, $date_birth,$phone ,$eps_id,$rol_id)
        {

                $data = array(

                        'NOMBRE' => $name,
                        'DOCUMENTO' => $document,
                        'GENERO' => $gender,
                        'FECHA_NACIMIENTO' => $date_birth,
                        'TELEFONO' => $phone,
                        'EPS_ID' => $eps_id,
                        'ROL_ID' => $rol_id
                                        
                );


                $this->db->insert('TB_USUARIOS',$data);

                    if ($this->db->affected_rows() == '1') {
                        return true;
                    }else{

                        return false;
                    }

        }

       
}

?>