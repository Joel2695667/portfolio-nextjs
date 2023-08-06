import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "./component.css";

const ContactLayout = () => {
  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    objet: yup.string().required(),
    description: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Veuillez acceptez les termes"),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        objet: "",
        description: "",
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className="wrapperFormualireF">
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="wrapperFormualire"
          >
            <h4 className="py-3">Me contacter</h4>
            <Row className="mb-3">
              <Form.Group
                className="col-12 mb-3"
                controlId="validationFormik01"
              >
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Prenom"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.lastName}
                  className="custom-form-control"
                />
                <Form.Control.Feedback>valid!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="col-12" controlId="validationFormik02">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                  className="custom-form-control"
                />

                <Form.Control.Feedback>valid!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="col-12 mb-3"
                controlId="validationFormik03"
              >
                <Form.Control
                  type="text"
                  placeholder="Objet"
                  name="objet"
                  value={values.objet}
                  onChange={handleChange}
                  isInvalid={!!errors.objet}
                  className="custom-form-control"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.objet}
                </Form.Control.Feedback>
              </Form.Group>
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
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Acceptez les termes & conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit" className="boutonSansBordure">
              Envoyer
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactLayout;
