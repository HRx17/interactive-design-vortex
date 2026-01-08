import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EarlyAccessRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: EarlyAccessRequest = await req.json();

    // Validate email
    if (!email || !email.includes("@") || email.length > 255) {
      console.error("Invalid email provided:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending early access notification for:", email);

    // Send notification email to you
    const emailResponse = await resend.emails.send({
      from: "Judgement Early Access <onboarding@resend.dev>",
      to: ["haetranpariya17@gmail.com"],
      subject: "🎮 New Judgement Early Access Request!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #22c55e; margin-bottom: 20px;">New Early Access Request!</h1>
          <p style="font-size: 16px; color: #333; margin-bottom: 16px;">
            Someone wants early access to <strong>Judgement</strong> on the Play Store.
          </p>
          <div style="background: #f4f4f4; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 14px; color: #666;">Email Address:</p>
            <p style="margin: 8px 0 0; font-size: 18px; color: #333; font-weight: bold;">${email}</p>
          </div>
          <p style="font-size: 14px; color: #666;">
            Add this user to your Play Store internal testing or early access list.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="font-size: 12px; color: #999;">
            This notification was sent from your portfolio website.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Request submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in notify-early-access function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
