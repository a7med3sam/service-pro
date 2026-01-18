import {
  Box,
  Container,
  Typography,
  Stack,
  Divider
} from "@mui/material";

const TermsSection = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="md">
        {/* Last Update */}
        <Typography variant="body2" color="text.secondary" mb={2}>
          Last Update: 25 Oct, 2024
        </Typography>

        {/* Intro */}
        <Typography variant="body2" color="text.secondary" mb={3}>
          Please read these Terms and Conditions carefully before using our
          Service. Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who access or use the Service.
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={6}>
          Please read these Terms and Conditions carefully before using our
          Service. Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who access or use the Service.
        </Typography>

        {/* Sections */}
        <Stack spacing={4}>
          {/* 1 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              1. Service Usage
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our platform provides assistance in preparing, reviewing, and
              submitting government-related applications such as work permits,
              residency visas, Emirates ID, trade licenses, and other official
              services.
              <br />
              We do not represent any government authority; we act as an
              intermediary service provider to help customers complete required
              tasks accurately and efficiently.
            </Typography>
          </Box>

          {/* 2 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              2. Document Submission
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              By submitting documents through our platform, you confirm that:
            </Typography>
            <ul>
              <li>All documents provided are accurate, valid, and lawful.</li>
              <li>
                You are authorized to submit these documents on behalf of
                yourself or your company.
              </li>
              <li>
                Incorrect, expired, or unclear documents may delay or prevent
                approval from government authorities.
              </li>
            </ul>
            <Typography variant="body2" color="text.secondary">
              We are not responsible for delays caused by inaccurate or
              incomplete documents.
            </Typography>
          </Box>

          {/* 3 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              3. Service Processing & Government Decisions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Processing times shown on our platform are estimates and depend on
              government approval timelines.
              <br />
              We cannot guarantee approval, rejection, or processing duration,
              as decisions are made solely by official government entities.
            </Typography>
          </Box>

          {/* 4 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              4. Fees & Payments
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Service fees listed on the platform apply only to our processing
              and support services.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Government fees are separate and may vary based on:
            </Typography>
            <ul>
              <li>Company classification</li>
              <li>Applicant category</li>
              <li>Type of transaction</li>
            </ul>
            <Typography variant="body2" color="text.secondary">
              All payments must be made using approved methods. Service fees are
              non-refundable once processing has begun.
            </Typography>
          </Box>

          {/* 5 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              5. Refund Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Refunds may be issued only if:
            </Typography>
            <ul>
              <li>The request has not yet been processed</li>
              <li>A duplicate payment was made</li>
              <li>
                The service cannot be completed due to our internal error
              </li>
            </ul>
            <Typography variant="body2" color="text.secondary">
              Government fees are non-refundable under any circumstances. Refund
              requests must be submitted within 7 days.
            </Typography>
          </Box>

          {/* 6 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              6. User Accounts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating an account requires accurate and complete information.
              You are responsible for maintaining the confidentiality of your
              login credentials.
              <br />
              We reserve the right to suspend or terminate accounts involved in
              misuse, fraud, or violation of these Terms.
            </Typography>
          </Box>

          {/* 7 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              7. Intellectual Property
            </Typography>
            <Typography variant="body2" color="text.secondary">
              All platform content, including text, graphics, logos, icons, and
              systems, is the intellectual property of our business and may not
              be copied or reused without written permission.
            </Typography>
          </Box>

          {/* 8 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              8. Privacy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We respect your privacy and are committed to protecting your
              personal data.
              <br />
              Our Privacy Policy explains how your information is collected,
              stored, and used.
            </Typography>
          </Box>

          {/* 9 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              9. Limitation of Liability
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              To the maximum extent permitted by applicable law, our platform
              will not be liable for:
            </Typography>
            <ul>
              <li>Delays caused by government systems</li>
              <li>Rejection of applications</li>
              <li>Incorrect information submitted by the user</li>
              <li>Unavailability of government portals</li>
              <li>Any indirect, incidental, or consequential damages</li>
            </ul>
            <Typography variant="body2" color="text.secondary">
              Government authorities make final decisions on all applications.
            </Typography>
          </Box>

          {/* 10 */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              10. Changes to Services
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We may update or modify services, pricing, or requirements at any
              time without prior notice, depending on official government
              updates.
            </Typography>
          </Box>

          <Divider />

          {/* Contact */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: support@yourservice.ae
              <br />
              Phone: +971 XXX XXX
              <br />
              Address: XYZ Government Services Center, UAE
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TermsSection;
