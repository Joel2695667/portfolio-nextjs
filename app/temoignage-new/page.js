"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { createTemoignage, updateTemoignage } from "@/store/temoignageSlice";
import { Toast } from "react-bootstrap";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TemoignageNew() {
  const { Formik } = formik;
  const schema = yup.object().shape({
    nom: yup.string().required(),
    profession: yup.string().required(),
    description: yup.string().required(),
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const id = searchParams.get("id");

  const temoignage = useSelector((state) => state.temoignage[id]);

  console.log(id, temoignage);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const onSave = (values) => {
    try {
      if (!id) {
        dispatch(createTemoignage(values));
      } else {
        dispatch(updateTemoignage({...values, id: id}));
      }
      toggleVisible();
      router.push("/temoignage");
    } catch (error) {}
  };

  return (
    <div>
      <Navigation />
      <Formik
        validationSchema={schema}
        onSubmit={onSave}
        initialValues={{
          nom: temoignage?.nom || "",
          profession: temoignage?.profession ||  "",
          description: temoignage?.description || "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors, enableReinitialize }) => (
          <div className="wrapperFormualireF">
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="wrapperFormualire"
            >
              <h4 className="py-3">{`${
                !id ? "Ajouter un nouveau" : "Modifier un"
              } témoignage`}</h4>
              <Row className="mb-3">
                <Form.Group
                  className="col-12 mb-3"
                  controlId="validationFormik01"
                >
                  <Form.Control
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={values.nom}
                    onChange={handleChange}
                    isValid={touched.nom && !errors.nom}
                    isInvalid={!!errors.nom}
                    className="custom-form-control"
                  />
                  <Form.Control.Feedback>valid!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="col-12" controlId="validationFormik02">
                  <Form.Control
                    type="text"
                    name="profession"
                    placeholder="Profession"
                    value={values.profession}
                    onChange={handleChange}
                    isValid={touched.profession && !errors.profession}
                    isInvalid={!!errors.profession}
                    className="custom-form-control"
                  />

                  <Form.Control.Feedback>valid!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="col-12" controlId="validationFormik04">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                    className="custom-form-control"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className="boutonSansBordure">
                Envoyer
              </Button>
            </Form>
          </div>
        )}
      </Formik>
      <Footer />
      <Toast show={visible} onClose={toggleVisible}>
        <Toast.Body>Enregistré avec succes</Toast.Body>
      </Toast>
    </div>
  );
}
